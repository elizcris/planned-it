const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, todoController.getTodo);

module.exports = router;