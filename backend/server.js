require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const appointmentRoutes = require("./routes/appointment");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
// app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
app.use("/api/appointment", appointmentRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
