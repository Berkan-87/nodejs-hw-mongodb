const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/contacts");
const ctrlWrapper = require("../utils/ctrlWrapper");

router.post("/", ctrlWrapper(ctrl.createContact));
router.patch("/:contactId", ctrlWrapper(ctrl.updateContact));
router.delete("/:contactId", ctrlWrapper(ctrl.deleteContact));

module.exports = router;
