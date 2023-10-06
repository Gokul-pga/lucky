const express = require("express");
const { contactDetails } = require("../controller/ContactDetails");
const router = express.Router();

router.post("/contactDetails", contactDetails);

module.exports = router;
