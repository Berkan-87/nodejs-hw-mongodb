const express = require("express");
const ctrl = require("../controllers/contacts");
const router = express.Router();

// CRUD rotaları
router.get("/", ctrl.getAllContacts);
router.get("/:contactId", ctrl.getContactById);
router.post("/", ctrl.createContact);
router.patch("/:contactId", ctrl.updateContact);
router.delete("/:contactId", ctrl.deleteContact);

module.exports = router;
