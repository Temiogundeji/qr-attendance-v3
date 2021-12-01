const { Week } = require("../models");
const createWeek = async (req, res) => {
  try {
    const { weekName } = req.body;
    const isExist = await Week.findOne({
      where: { weekName: weekName },
    });
    if (isExist) {
      return res.status(400).json({
        message: "Week already exist",
      });
    }
    const week = await Week.create(req.body);
    return res.status(201).json({
      week,
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllWeeks = async (req, res) => {
  try {
    const weeks = await Week.findAll();
    return res.status(200).json({ weeks, status: "success" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createWeek,
  getAllWeeks,
};
