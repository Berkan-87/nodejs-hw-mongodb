const mongoose = require("mongoose");
require("dotenv").config();

console.log("Mongo URL:", process.env.MONGO_URL); // test için

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB’ye bağlandı!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Bağlantı hatası:", err);
    process.exit(1);
  });
