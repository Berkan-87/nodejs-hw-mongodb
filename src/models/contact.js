const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\+?[0-9\s\-]{7,15}$/, "Invalid phone number format"]
    },
    contactType: {
      type: String,
      enum: ["personal", "work", "other"],
      default: "personal"
    }
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
