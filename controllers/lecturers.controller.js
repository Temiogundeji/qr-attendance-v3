const {
  isEmailValid,
  generateToken,
  generateHash,
  comparePassword,
} = require("../helpers/utils.js");

const { Lecturer } = require("../models");

const registerLecturer = async (req, res) => {
  try {
    const { username, email, password, departmentId, profilePics } = req.body;
    if (!username || !email || !departmentId || !password) {
      return res.status(400).send({
        status: "error",
        error: "Some values are missing!",
      });
    }

    const hashedPassword = generateHash(password);
    const newMember = {
      username,
      departmentId,
      email,
      password: hashedPassword,
      profilePics,
    };

    if (!isEmailValid(email)) {
      return res.status(400).send({
        message: "Please enter a valid email address",
      });
    }

    const isExist = await Lecturer.findOne({
      where: { email: email },
    });
    if (isExist) {
      return res.status(400).json({
        message: "Lecturer already exist",
      });
    }
    const token = generateToken(email);
    const lect = await Lecturer.create(newMember);
    return res.status(201).send({
      data: lect,
      token: token,
      message: `${username} has been registered successfully`,
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const loginLecturer = async (req, res) => {
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

    const lect = await Lecturer.findOne({
      where: { email: email },
    });
    if (!lect) {
      return res.status(400).json({
        message: "You do not have an account on this platform",
      });
    } else {
      const token = generateToken(email);
      if (!comparePassword(lect.password, password)) {
        return res
          .status(400)
          .send({ message: "The password entered is incorrect!" });
      }

      return res.status(200).send({
        data: lect,
        token: token,
        message: `Welcome ${lect.username}`,
        status: "success",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerLecturer,
  loginLecturer,
};
