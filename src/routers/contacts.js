const express = require("express");
const Contact = require("../models/contact");

const router = express.Router();

// GET: Tüm contactları getir
router.get("/", async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.json({ durum: 200, mesaj: "Başarılı", veri: contacts });
  } catch (err) {
    next(err);
  }
});

// POST: Yeni contact ekle
router.post("/", async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = await Contact.create({ name, email, phone });
    res.status(201).json({ durum: 201, mesaj: "Contact eklendi", veri: newContact });
  } catch (err) {
    next(err);
  }
});

// GET: Tek contact
router.get("/:id", async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ durum: 404, mesaj: "Contact bulunamadı", veri: null });
    res.json({ durum: 200, mesaj: "Başarılı", veri: contact });
  } catch (err) {
    next(err);
  }
});

// PUT: Contact güncelle
router.put("/:id", async (req, res, next) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ durum: 404, mesaj: "Contact bulunamadı", veri: null });
    res.json({ durum: 200, mesaj: "Güncellendi", veri: updated });
  } catch (err) {
    next(err);
  }
});

// DELETE: Contact sil
router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ durum: 404, mesaj: "Contact bulunamadı", veri: null });
    res.json({ durum: 200, mesaj: "Silindi", veri: deleted });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
