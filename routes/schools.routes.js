const { Router } = require("express");
const SchoolController = require("../controllers/schools.controller");

const router = Router();

router.post("/schools", SchoolController.createSchool);
router.get("/schools", SchoolController.getAllSchools);

module.exports = router;
