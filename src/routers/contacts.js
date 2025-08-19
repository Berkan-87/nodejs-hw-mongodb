// routes/contacts.js
const express = require("express");
const Contact = require("../models/contact");

const router = express.Router();

// Tüm contactları getir
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Tek contact getir
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact bulunamadı" });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Yeni contact ekle
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Contact güncelle (PATCH)
router.patch("/:id", async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // güncellenmiş halini döndürsün
    );
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact bulunamadı" });
    }
    res.json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Contact sil
router.delete("/:id", async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact bulunamadı" });
    }
    res.json({ message: "Contact silindi" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
