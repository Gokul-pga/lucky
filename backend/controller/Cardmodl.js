const { CardModel } = require("../model/Cardmodl");
const cloudinary = require("../utils/cloudinary");
const express = require("express");

exports.Card = async (req, res) => {
  const { title, description, cardImg } = req.body;
  try {
    if (cardImg) {
      const uploadResponse = await cloudinary.uploader.upload(cardImg, {
        upload_preset: "luckycharm",
      });

      if (uploadResponse) {
        const cardModel = new CardModel({
          title,
          description,
          cardImg: uploadResponse,
        });

        const cardImage = await cardModel.save();
        res.send({ status: "ok", data: cardImage });
      }
    }
  } catch (error) {
    console.log(error, "CardModel Post error");
  }
};

exports.getCard = async(req,res) => {
  try {
    const alldata = await CardModel.find({})
    res.send({status:"ok", data:alldata})
  } catch (error) {
    console.log(error,"get coursecard error");
  }
}