const { Router } = require("express");
const WeekController = require("../controllers/weeks.controller");

const router = Router();

router.post("/weeks", WeekController.createWeek);
router.get("/weeks", WeekController.getAllWeeks);

module.exports = router;
