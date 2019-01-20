const { Router } = require("express");
const router = Router();
const ctrl = require("./users.contoller");

router.get("/", ctrl.getUsers);

router.post("/login", ctrl.loginUser);

router.post("/check", ctrl.checkUser);

module.exports = router;
