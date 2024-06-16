const Router = require("express")
const router = new Router();
const userController = require("../controllers/userController");
const {body} = require("express-validator");


router.post("/", body("email").isEmail(), userController.addUser);

module.exports  = router