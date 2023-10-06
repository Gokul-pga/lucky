const express = require("express");
const { Card, getCard } = require("../controller/Cardmodl");
const router = express.Router();

router.post("/post", Card);
router.get("/get",getCard)

module.exports = router;
