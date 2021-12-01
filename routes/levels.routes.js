const { Router } = require("express");
const LevelController = require("../controllers/levels.controller");

const router = Router();

router.post("/levels", LevelController.createLevel);
router.get("/levels", LevelController.getAllLevels);

module.exports = router;
