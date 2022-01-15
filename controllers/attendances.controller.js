const {
  Attendance,
  Student,
  Course,
  Class,
  Lecturer,
  Week,
} = require("../models"); // const moment = require("moment");

//student's POV
//Create an attendance
const createAttendance = async (req, res) => {
  try {
    const { studentId, classId, lecturerId, courseId } = req.body;
    if (!studentId || !classId || !lecturerId || !classId || !courseId) {
      return res.status(400).send({
        message: "Some values are missing!",
      });
    }
    //Ensure no student is able to mark attendance twice a day
    //Save attendance to the database
    const attendance = await Attendance.create(req.body);
    return res.status(201).json({
      status: "success",
      attendance,
      message: "You attendance for today has been marked!",
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

//Get all my attendances for every course.
const getAllAttendancesForAStudent = async (req, res) => {
  const { studentId } = req.params;
  try {
    const allStudentAttendances = await Attendance.findAll({
      where: { studentId },
      include: [{ model: Student }, { model: Course }, {model: Lecturer}],
    });
    return res
      .status(200)
      .json({ myAttendances: allStudentAttendances, status: "success" });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

//Get all attendances for all courses taken in a day
const getMyDailyAttendances = async (req, res) => {
  const { studentId, date } =  req.params;
   try {
     const allMyDailyAttendances = await Attendance.findAll({
       where: { studentId, date },
       include: [{ model: Student }, { model: Course }, { model: Lecturer}],
     });
   } catch (e) {
     
   }
}

//Get all my attendances for a course using courseId and studentId.
const getStudentAttendancesForACourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.params;
    const studentAttendancesForCourse = await Attendance.findAll({
      where: {
        studentId,
        courseId,
      },
      include: [{ model: Course }, { model: Lecturer }],
    });
    return res.status(200).send({
      myAttendancesForCourse: studentAttendancesForCourse,
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
//Get all my attendances for a day i.e I should be able to know the classes I attended in a particular day.
const getAttendancesForADay = async (req, res) => {
  const { createdAt } = req.params;
  try {
    const myAttendancesForDay = await Attendances.findAll({
      where: { createdAt },
    });
    return res.status(200).send({ myAttendancesForDay, status: "sucess" });
  } catch (e) {
    return res.status(500).send(error.message);
  }
};
//lecturer's POV

//Get a student's attendances for my course in a semester
//Get a student's attendances for my course for a day
// Get all students offering my course for a day.
//Get all students offering a course.

module.exports = {
  getAllAttendancesForAStudent,
  getAttendancesForADay,
  getStudentAttendancesForACourse,
  getMyDailyAttendances,
  createAttendance,
};
