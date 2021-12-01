const { Clas } = require("../models");
const createClas = async (req, res) => {
  try {
    const { courseId } = req.body;
    const isExist = await Clas.findOne({
      where: {
        //Ensure lecturer can't a class twice a day.
        // [Op.and]: [
        //   sequelize.where(
        //     sequelize.fn("dateCompute"),
        //     sequelize.fn("GETDATE"),
        //     ">"
        //   ),
        //   { foo: "bar" },
        // ],
        courseId: courseId,
      },
    });
    if (isExist) {
      return res.status(400).json({
        message: "You've created a class for this course today!",
      });
    }
    const clas = await Clas.create(req.body);
    return res.status(201).json({
      class: clas,
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllClasses = async (req, res) => {
  try {
    const classes = await Clas.findAll();
    return res.status(200).json({ classes, status: "success" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createClas,
  getAllClasses,
};
