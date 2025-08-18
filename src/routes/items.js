const express = require("express");
const router = express.Router();
let items = require("../data/items");

// CREATE (POST)
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ mesaj: "İsim gerekli" });
  }
  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// READ (GET all)
router.get("/", (req, res) => {
  res.json(items);
});

// READ (GET by id)
router.get("/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ mesaj: "Bulunamadı" });
  }
  res.json(item);
});

// UPDATE (PUT)
router.put("/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ mesaj: "Bulunamadı" });
  }
  item.name = req.body.name || item.name;
  res.json(item);
});

// DELETE
router.delete("/:id", (req, res) => {
  items = items.filter(i => i.id !== parseInt(req.params.id));
  res.json({ mesaj: "Silindi" });
});

module.exports = router;
