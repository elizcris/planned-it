const express = require("express");
const router = express.Router();
const tripbuilderController = require("../controllers/tripbuilder");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, tripbuilderController.getTripbuilder);


module.exports = router;