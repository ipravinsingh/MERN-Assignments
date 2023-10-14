const authrouter = require("express").Router();
const AuthController = require("../controllers/auth");

authrouter.get("/login", AuthController.signupController);

module.exports = authrouter;
