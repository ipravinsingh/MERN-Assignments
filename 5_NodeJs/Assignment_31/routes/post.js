const postRouter = require("express").Router();
const LoginController = require("../controllers/auth");
const log = require("../middleware/logger");

postRouter.get("/signup", log, LoginController.loginController);

module.exports = postRouter;
