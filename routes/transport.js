const express = require("express");
const router = express.Router();
const transportController = require("../controllers/transport");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, transportController.getTransport);

module.exports = router;