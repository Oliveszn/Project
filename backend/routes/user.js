const express = require("express");

// controller functions
const {
  loginUser,
  signupUser,
  getUsers,
  getUser,
} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// get user route
router.get("/signup", getUsers);

// get a single user
router.get("/signup/:id", getUser);

module.exports = router;
