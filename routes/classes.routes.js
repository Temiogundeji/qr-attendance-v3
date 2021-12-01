const { Router } = require("express");
const ClassController = require("../controllers/class.controller");

const router = Router();

router.post("/classes", ClassController.createClas);
router.get("/classes", ClassController.getAllClasses);

module.exports = router;
