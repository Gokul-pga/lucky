const mongoose = require("mongoose");

const projectDetailschema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    subject:String,
    message:String,
},
{
    collection:'projectinfo',
});

mongoose.model("projectinfo",projectDetailschema)