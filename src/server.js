const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const contactsRouter = require("./routers/contacts");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB bağlantısı
const mongoUri = process.env.MONGO_URL; // Render veya .env'den alınacak
console.log("Connecting to MongoDB URI:", mongoUri);

mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ MongoDB bağlantısı başarılı"))
  .catch((err) => {
    console.error("❌ MongoDB bağlantı hatası:", err);
    process.exit(1);
  });

// Routes
app.use("/contacts", contactsRouter);

// 404 ve hata middleware’leri
app.use(notFoundHandler);
app.use(errorHandler);

// Server portu
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌍 Server ${PORT} portunda çalışıyor...`);
});
