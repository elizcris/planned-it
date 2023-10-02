const express = require("express");
const router = express.Router();
const packingController = require("../controllers/packing");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', ensureAuth, packingController.getPacking);

router.post('/createItem', packingController.createItem);

router.post('/selectItem', packingController.selectItem);

router.put('markComplete', packingController.markComplete);

router.put('/markIncomplete', packingController.markIncomplete);

router.delete('/deleteItem', packingController.deleteItem);


module.exports = router;