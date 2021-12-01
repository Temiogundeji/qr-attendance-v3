const { Router } = require("express");
const CourseController = require("../controllers/courses.controller");

const router = Router();

router.post("/courses", CourseController.createCourse);
router.get("/courses", CourseController.getAllCourses);

module.exports = router;
