const Appointment = require("../models/appointmentModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

// create new appointment
// const createAppointments = async (req, res) => {
//   const { email, name } = req.body;

//   // add doc to db
//   try {
//     const appointment = await Appointment.create({ email, name });
//     res.status(200).json(appointment);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// Create a new appointment
const createAppointments = async (req, res) => {
  try {
    const { company, email, name } = req.body;
    const foundCompany = await User.findOne({ company: company });
    if (foundCompany && foundCompany.isServiceProvider) {
      const appointment = new Appointment({ email, name });
      await appointment.save();
      res.status(201).json(appointment);
    } else {
      res
        .status(400)
        .json({ message: "This company does not exist on the platfrom" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// get all Appointment
const getAppointments = async (req, res) => {
  const appointment = await Appointment.find({}).sort({ createdAt: -1 });

  res.status(200).json(appointment);
};

// get a single Appointment
const getAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such appointment" });
  }

  const appointment = await Appointment.findById(id);

  if (!appointment) {
    return res.status(404).json({ error: "No such appointment" });
  }

  res.status(200).json(detail);
};

module.exports = { createAppointments, getAppointments, getAppointment };
