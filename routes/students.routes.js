const { Router } = require("express");
const {
  registerStudent,
  loginStudent,
  getAllStudents,
} = require("../controllers/students.controller");

// const multer = require("multer");
// const { imageStorage } = require("../helpers/cloudinaryConfig");
// const parser = multer({ storage: imageStorage });
// const parserConst = parser.single("profilePics");

const router = Router();

router.post("/auth/student/register", registerStudent);
router.post("/auth/student/login", loginStudent);

module.exports = router;
