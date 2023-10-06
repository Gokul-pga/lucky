const mongoose = require("mongoose");

const details = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
  },
  {
    collection: "ContactDetails",
  }
);

const Contact = mongoose.model("ContactDetails", details);
exports.Contact = Contact;
