const express = require("express");
const router = express.Router();
const completedtripsController = require("../controllers/completedtrips");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, completedtripsController.getCompletedtrips);


module.exports = router;