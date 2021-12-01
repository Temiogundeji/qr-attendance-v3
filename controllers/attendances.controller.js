const { WorkingAttendance, Sequelize } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");

//student's POV

//Get all my attendances for each course.
//Get all my attendances for every course.
//Get all my attendances for a day i.e I should be able to know the classes I attended in a particular day.

//lecturer's POV

//Get a student's attendances for my course in a semester
//Get a student's attendances for my course for a day
// Get all students offering my course for a day.
//Get all students offering a course.
