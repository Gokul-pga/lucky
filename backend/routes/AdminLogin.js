const express = require("express");
const router = express.Router();
const { login, userdata } = require("../controller/AdminLogin");

router.post("/loginuser", login);
router.post("/userdata", userdata);
module.exports = router;
