const express = require("express");
const router = express.Router();
const currenttripController = require("../controllers/currenttrip");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, currenttripController.getCurrenttrip);


module.exports = router;