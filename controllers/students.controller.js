const {
  isEmailValid,
  generateToken,
  generateHash,
  comparePassword,
} = require("../helpers/utils.js");

const { Student } = require("../models");

const registerStudent = async (req, res) => {
  try {
    const { username, email, password, departmentId, levelId, matricNo } =
      req.body;
    if (
      !username ||
      !email ||
      !departmentId ||
      !password ||
      !levelId ||
      !matricNo
    ) {
      return res.status(400).send({
        status: "error",
        error: "Some values are missing!",
      });
    }

    const hashedPassword = generateHash(password);
    const newMember = {
      username,
      departmentId,
      levelId,
      matricNo,
      email,
      password: hashedPassword,
    };

    if (!isEmailValid(email)) {
      return res.status(400).send({
        message: "Please enter a valid email address",
      });
    }

    const isExist = await Student.findOne({
      where: { email: email },
    });
    if (isExist) {
      return res.status(400).json({
        message: "Student already exist",
      });
    }
    const token = generateToken(email);
    const student = await Student.create(newMember);
    return res.status(201).send({
      data: student,
      token: token,
      message: `${username} has been registered successfully`,
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        status: "error",
        error: "Some values are missing!",
      });
    }

    if (!isEmailValid(email)) {
      return res.status(400).send({
        message: "Please enter a valid email address",
      });
    }

    const student = await Student.findOne({
      where: { email: email },
    });
    if (!student) {
      return res.status(400).json({
        message: "You do not have an account on this platform",
      });
    } else {
      const token = generateToken(email);
      if (!comparePassword(student.password, password)) {
        return res
          .status(400)
          .send({ message: "The password entered is incorrect!" });
      }

      return res.status(200).send({
        data: student,
        token: token,
        message: `Welcome ${student.username}`,
        status: "success",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerStudent,
  loginStudent,
};
