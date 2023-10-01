const express = require("express");
const { Contact } = require("../model/contactDetails");

exports.contactDetails = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  try {
    await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });
res.send({status:"added", data:req.body});
  } catch (error) {
    console.log(error,"contactDetails error");
  }
};
