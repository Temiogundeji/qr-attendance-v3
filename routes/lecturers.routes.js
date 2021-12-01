const Router = require("express");

const {
  registerLecturer,
  loginLecturer,
} = require("../controllers/lecturers.controller");

const router = Router();

router.post("/auth/lecturer/register", registerLecturer);
router.post("/auth/lecturer/login", loginLecturer);

module.exports = router;
