import {
  Alert,
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "animate.css";
import { Toaster, toast } from "react-hot-toast";
import { contactDetails } from "@/routes/contactDetails";

function Modalpage({ open, setOpen }) {
  const [inputdata, setInputdata] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { name, email, phone, subject, message } = inputdata;

  const handleClose = () => setOpen(false);

  const handlesubmit = () => {
    if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      subject !== "" &&
      message !== ""
    ) {
      contactDetails(name, email, phone, subject, message)
      setInputdata({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      console.log(inputdata);
      toast;
    } else {
      toast.error("All fields are mandatory");
    }
  };

  return (
    <>
      <Toaster />
      <Modal
        open={open}
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#3b3b3b9c",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Stack
          className="animate__animated animate__zoomIn"
          direction="column"
          sx={{
            width: {
              xl: "50%",
              lg: "50%",
              md: "80%",
              sm: "80%",
              xs: "80%",
            },
            backgroundColor: "#e3ebebde",
            boxShadow: 24,
            color: "Black",
            p: 2,
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              fontSize: {
                xl: "30px",
                lg: "30px",
                md: "18px",
                sm: "18px",
                xs: "18px",
              },
              fontWeight: "bold",
              textAlign: "center",
              padding: "20px",
              color: "#0d0d0d",
            }}
          >
            Let's Start With <span style={{ color: "#4dc3ff" }}>Together.</span>
          </Typography>

          <Box
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "30px",
              color: "#6699ff",
            }}
          >
            <TextField
              id="outlined"
              variant="standard"
              label="Name"
              value={name}
              onChange={(e) => {
                setInputdata({ ...inputdata, name: e.target.value });
              }}
            />

            <TextField
              id="outlined-controlled"
              variant="standard"
              label="Email"
              value={email}
              onChange={(e) => {
                setInputdata({ ...inputdata, email: e.target.value });
              }}
            />
            <TextField
              id="outlined-controlled"
              variant="standard"
              label="Mobile Number"
              value={phone}
              onChange={(e) => {
                setInputdata({ ...inputdata, phone: e.target.value });
              }}
            />
            <TextField
              id="outlined-controlled"
              variant="standard"
              label="Subject"
              value={subject}
              onChange={(e) => {
                setInputdata({ ...inputdata, subject: e.target.value });
              }}
            />
            <TextField
              id="outlined-controlled"
              variant="standard"
              label="Message"
              value={message}
              onChange={(e) => {
                setInputdata({ ...inputdata, message: e.target.value });
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#fff",
                padding: "5px 8px",
                color: "#000",
                // fontWeight:"bold",
                borderRadius: "4px",
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "green",
                  color: "#fff",
                  borderRadius: "10px",
                },
              }}
              onClick={() => {
                handlesubmit();
              }}
            >
              Send Message
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor:"#fff",
                padding: "5px 20px",
                borderRadius: "4px",
                color: "#000",
                transition: "0.3s",
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "red",
                  borderRadius: "10px",
                  color: "#fff",
                },
              }}
            >
              Cancel
            </Button>
          </Box>
        </Stack>
      </Modal>
    </>
  );
}

export default Modalpage;
