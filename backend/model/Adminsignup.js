const mongoose = require("mongoose");

const Admindata = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    confirmpass: String,
  },
  {
    collection: "AdminDetails",
  }
);

const Admin = mongoose.model("AdminDetails", Admindata);
exports.Admin = Admin;
