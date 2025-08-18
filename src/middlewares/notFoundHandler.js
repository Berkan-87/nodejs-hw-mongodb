module.exports = (req, res, next) => {
  res.status(404).json({
    durum: 404,
    mesaj: "Rota bulunamadı",
    veri: null,
  });
};
