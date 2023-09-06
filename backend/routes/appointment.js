const express = require("express");

const {
  createAppointments,
  getAppointments,
  getAppointment,
} = require("../controllers/appointmentController");

const router = express.Router();

// POST a new user
router.post("/listing", createAppointments);

// GET all users
router.get("/listing", getAppointments);

//GET a single user
router.get("/listing/:id", getAppointment);

module.exports = router;
