const mongoose = require("mongoose");

const CardImage = new mongoose.Schema(
  {
    title: String,
    description: String,
    cardImg: Object,
  },
  {
    collection: "CardDetails",
  }
);

const CardModel = mongoose.model("CardDetails", CardImage);
exports.CardModel = CardModel;
