const express = require("express");
const { Admin } = require("../model/Adminsignup");
const bcrypt = require("bcrypt");

exports.admindetails = async (req, res) => {
  const { name, email, password, confirmpass } = req.body;
  const bcryptPassword = await bcrypt.hash(password, 10);
  try {
    const olduser = await Admin.findOne({ email });
    if (olduser) {
      return res.json("User already exists");
    }
    await Admin.create({
      name,
      email,
      password: bcryptPassword,
      confirmpass,
    });

    res.send({ status: "ok", data: req.body });
  } catch (error) {
    console.log(error, "Admin post error");
  }
};

exports.getadmin = async (req, res) => {
  try {
    const admin = await Admin.find({});
    res.send({ status: "ok", data: admin });
  } catch (error) {
    console.log(error, "admin get error");
  }
};
