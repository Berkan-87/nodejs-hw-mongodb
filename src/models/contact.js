const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const contactSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  isFavourite: {
    type: Boolean,
    default: false,
  },
  contactType: {
    type: String,
    required: true,
    enum: ["personal", "work", "other"], // Örnek tipler
  },
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
