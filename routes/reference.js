const express = require("express");
const router = express.Router();
const referenceController = require("../controllers/reference");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, referenceController.getReference);


module.exports = router;