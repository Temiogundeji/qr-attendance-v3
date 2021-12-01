const { Level } = require("../models");
const createLevel = async (req, res) => {
  try {
    const { levelName } = req.body;
    const isExist = await Level.findOne({
      where: { levelName: levelName },
    });
    if (isExist) {
      return res.status(400).json({
        message: "Level already exist",
      });
    }
    const level = await Level.create(req.body);
    return res.status(201).json({
      level,
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllLevels = async (req, res) => {
  try {
    const levels = await Level.findAll();
    return res.status(200).json({ levels, status: "success" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createLevel,
  getAllLevels,
};
