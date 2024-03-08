const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, contactController.getContact);

module.exports = router;