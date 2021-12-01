const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const logger = require("morgan");
const app = express();

const studentRoutes = require("./routes/students.routes");
const lecturerRoutes = require("./routes/lecturers.routes");
const schoolRoutes = require("./routes/schools.routes");
const departmentRoutes = require("./routes/departments.routes");
const levelRoutes = require("./routes/levels.routes");
const weekRoutes = require("./routes/weeks.routes");
const courseRoutes = require("./routes/courses.routes");
const classRoutes = require("./routes/classes.routes");
// const attendanceRoutes = require("./routes/attendances.routes");

require("dotenv").config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));

// parse requests of content-type - application/json
app.use(cors());

app.get("/new", (req, res) => {
  return res.json({ message: "API for QRCode attendance system is here!" });
});

app.use("/api/v1", studentRoutes);
app.use("/api/v1", lecturerRoutes);
app.use("/api/v1", schoolRoutes);
app.use("/api/v1", departmentRoutes);
app.use("/api/v1", levelRoutes);
app.use("/api/v1", weekRoutes);
app.use("/api/v1", courseRoutes);
app.use("/api/v1", classRoutes);
// app.use("/api/v1", attendanceRoutes);

// app.use("/api/v1", levelRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

module.exports = app;
