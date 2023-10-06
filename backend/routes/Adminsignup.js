const express = require("express");
const router = express.Router();
const { admindetails, getadmin } = require("../controller/Adminsignup");

router.post("/post", admindetails);
router.get("/get", getadmin);

module.exports = router;
