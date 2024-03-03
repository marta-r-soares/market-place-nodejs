const router = require("express").Router();
const authController = require("../controller/auth.controller");
//const { validaLogin } = require("../middleware/validacao.middleware")

router.post("/login", authController.loginController);

module.exports = router;