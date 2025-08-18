module.exports = (err, req, res, next) => {
  console.error("🔥 Hata:", err.message);

  res.status(500).json({
    durum: 500,
    mesaj: "Sunucu hatası",
    hata: err.message,
  });
};
