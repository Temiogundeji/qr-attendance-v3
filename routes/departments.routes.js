const { Router } = require("express");
const DepartmentController = require("../controllers/departments.controllers");

const router = Router();

router.post("/departments", DepartmentController.createDepartment);
router.get("/departments", DepartmentController.getAllDepartments);
router.get("/departments/:id", DepartmentController.getDepartmentById);
router.put("/departments/:id", DepartmentController.updateDepartment);
router.delete("/departments/:id", DepartmentController.deleteDepartment);

module.exports = router;
