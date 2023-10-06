const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const contactDetails = require("./routes/contactDetails.js");
const Adminsignup = require("./routes/Adminsignup.js");
const AdminLogin = require("./routes/AdminLogin.js");
const Cardmodl = require("./routes/Cardmodl.js");

// connect to server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server connected");
});

// connect to database
const mongoURL = process.env.mongoURL;
mongoose
  .connect(mongoURL, {
    useNewUrlparser: true,
  })
  .then(() => {
    console.log("Databse Connected");
  })
  .catch((e) => console.log(e));

app.use("/contactdata", contactDetails);
app.use("/admin", Adminsignup);
app.use("/adminlogin", AdminLogin);
app.use("/card", Cardmodl);
