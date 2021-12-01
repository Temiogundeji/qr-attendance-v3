const { School } = require("../models");
const createSchool = async (req, res) => {
  try {
    const { schoolName } = req.body;
    const isExist = await School.findOne({
      where: { schoolName: schoolName },
    });
    if (isExist) {
      return res.status(400).json({
        message: "School already exist",
      });
    }
    const school = await School.create(req.body);
    return res.status(201).json({
      school,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllSchools = async (req, res) => {
  try {
    const sch = await School.findAll();
    return res.status(200).json({ sch });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getSchoolById = async (req, res) => {
  try {
    const { id } = req.params;
    const sch = await School.findOne({
      where: { id: id },
    });
    if (sch) {
      return res.status(200).json({ sch });
    }
    return res.status(404).send("School with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await School.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedSchool = await School.findOne({ where: { id: id } });
      return res.status(200).json({ department: updatedSchool });
    }
    throw new Error("School not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await School.destroy({
      where: { id: id },
    });
    if (deleted) {
      return res.status(204).send("School deleted");
    }
    throw new Error("School not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createSchool,
  getAllSchools,
  getSchoolById,
  updateSchool,
  deleteSchool,
};
