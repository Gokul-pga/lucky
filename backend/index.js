const express  = require("express");
const app = express();
app.use(express.json())
const mongoose = require("mongoose")
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
const contactDetails = require("./routes/contactDetails.js");
dotenv.config();

// connect to server
const PORT = process.env.PORT
app.listen(PORT, () =>{
  console.log("server connected");
})

// connect to database
const mongoURL= process.env.mongoURL
mongoose.connect(mongoURL, {
  useNewUrlparser:true
}).then(() => {console.log("Databse Connected")}).catch((e) => console.log(e))

app.use("/contact",contactDetails)



// require("./projectdeatils")
// const User = mongoose.model("projectinfo")
// app.post("/post", async (req,res) => {
//   const {name, email, phone, subject, message} = req.body
//   try {
//     await User.create({
//       name,
//       email,
//       phone,
//       subject,
//       message
//     })
//     res.send(req.body)
//     console.log(req.body)
//   } catch (error) {
//     res.send({status:'Unable to user cannot find'})
//   }
// })
// //get
// app.get("/getallUsers",async(req,res)=>{
//   const allUsers =await User.find({})
//   res.send([allUsers])
// })