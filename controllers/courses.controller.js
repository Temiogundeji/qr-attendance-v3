const { Course } = require("../models");
const createCourse = async (req, res) => {
  try {
    const { courseTitle } = req.body;
    const isExist = await Course.findOne({
      where: { courseTitle },
    });
    if (isExist) {
      return res.status(400).json({
        message: "Course has already been created",
      });
    }
    const course = await Course.create(req.body);
    return res.status(201).json({
      course,
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    return res.status(200).json({ courses, status: "success" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createCourse,
  getAllCourses,
};
