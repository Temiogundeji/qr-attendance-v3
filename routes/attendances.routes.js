const { Router } = require("express");
const AttendancesController = require("../controllers/attendances.controller");

const router = Router();

router.get(
  "/student/attendances/:studentId",
  AttendancesController.getAllAttendancesForAStudent
);
router.get(
  "/students/:studentId/attendances/courses/:courseId",
  AttendancesController.getStudentAttendancesForACourse
);
router.post("/attendances", AttendancesController.createAttendance);

module.exports = router;
