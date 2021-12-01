const { Department } = require("../models");
const createDepartment = async (req, res) => {
  try {
    const { departmentName } = req.body;
    const isExist = await Department.findOne({
      where: { departmentName: departmentName },
    });
    if (isExist) {
      return res.status(400).json({
        message: "Department already exist",
      });
    }
    const dept = await Department.create(req.body);
    return res.status(201).json({
      dept,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    return res.status(200).json({ departments, status: "success" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const dept = await Department.findOne({
      where: { id: id },
    });
    if (dept) {
      return res.status(200).json({ sch });
    }
    return res
      .status(404)
      .send("Department with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Department.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedDepartment = await Department.findOne({ where: { id: id } });
      return res.status(200).json({ department: updatedDepartment });
    }
    throw new Error("Department not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Department.destroy({
      where: { id: id },
    });
    if (deleted) {
      return res.status(204).send("Department deleted");
    }
    throw new Error("Department not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
