import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import "animate.css";
import { Toaster, toast } from "react-hot-toast";
import { contactDetails } from "@/routes/contactDetails";
import { useRouter } from "next/router";

function Contact() {
  const router = useRouter();
  const [inputdata, setInputdata] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { name, email, phone, subject, message } = inputdata;
  const handlesubmit = () => {
    if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      subject !== "" &&
      message !== ""
    ) {
      contactDetails(name, email, phone, subject, message);
      setInputdata({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      console.log(inputdata);
    } else {
      toast.error("All fields are mandatory");
    }
  };

  return (
    <>
      <Toaster />
      <Layout>
        <Box
          gap={3}
          sx={{
            padding: {
              xl: "20px 0",
              lg: "20px 0",
              md: "20px 10px",
              sm: "20px 20px",
              xs: "20px 20px",
            },
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
            justifyContent: {
              xl: "space-around",
              lg: "space-around",
              sm: "space-around",
              md: "space-around",
              xs: "space-around",
            },
            bgcolor: "#050505e5",
          }}
        >
          <Box
            gap={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "10px 20px",
            }}
          >
            <Typography
              className="animate__animated animate__zoomIn"
              sx={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              CONTACT INFO
            </Typography>

            {/* start stack 1 */}
            <Box
              gap={4}
              sx={{ display: "flex", flexDirection: "column" }}
              className="animate__animated animate__slideInLeft"
            >
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <EmailOutlinedIcon
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xl: "40px",
                      lg: "40px",
                      sm: "30px",
                      md: "30px",
                      xs: "30px",
                    },
                    backgroundImage:
                      "linear-gradient(to right bottom,#333333,#1a1a1a)",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                />
                <Box sx={{ color: "#e3ebebe0" }}>
                  <Typography color="#fff" fontWeight="bold" fontSize="16px">
                    MAIL US
                  </Typography>
                  <Typography sx={{ color: "#e3ebebe0", fontSize: "14px" }}>
                    nishanthjagan16@gmail.com
                  </Typography>
                  <Typography sx={{ color: "#e3ebebe0", fontSize: "14px" }}>
                  gokulanand2508@gmail.com
                  </Typography>
                </Box>
              </Stack>
              {/* end stack 1 */}

              {/* start stack 2 */}
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <LocalPhoneOutlinedIcon
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xl: "40px",
                      lg: "40px",
                      sm: "30px",
                      md: "30px",
                      xs: "30px",
                    },
                    backgroundImage:
                      "linear-gradient(to right bottom,#333333,#1a1a1a)",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                />
                <Box sx={{ color: "#e3ebebe0" }}>
                  <Typography
                    color="#e3ebebe0"
                    fontWeight="bold"
                    fontSize="16px"
                  >
                    CONTACT US
                  </Typography>
                  <Typography sx={{ color: "#e3ebebe0", fontSize: "14px" }}>
                    +919790109323
                  </Typography>
                  <Typography sx={{ color: "#e3ebebe0", fontSize: "14px" }}>
                    +919500593141
                  </Typography>
                </Box>
              </Stack>
              {/* end stack 2 */}

              {/* start stack 3 */}
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <RoomOutlinedIcon
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xl: "40px",
                      lg: "40px",
                      sm: "30px",
                      md: "30px",
                      xs: "30px",
                    },
                    backgroundImage:
                      "linear-gradient(to right bottom,#333333,#1a1a1a)",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                />
                <Box sx={{ color: "#e3ebebe0" }}>
                  <Typography color="#fff" fontWeight="bold" fontSize="16px">
                    LOCATION
                  </Typography>
                  <Typography sx={{ color: "#e3ebebe0", fontSize: "14px" }}>
                  Saravanapatti main road,
                  </Typography>
                  <Typography sx={{ color: "#e3ebebe0", fontSize: "14px" }}>
                    Coimbatore - 641035
                  </Typography>
                </Box>
              </Stack>
            </Box>
            {/* end stack 3 */}

            {/* Social Info Start */}
            <Stack gap={2} sx={{ flexDirection: "column" }}>
              <Typography
                className="animate__animated animate__zoomIn"
                sx={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  width: "100%",
                }}
              >
                SOCIAL INFO
              </Typography>
              <Stack
                gap={4}
                sx={{
                  flexDirection: "row",
                  width: {
                    xl: "300px",
                    lg: "300px",
                    md: "350px",
                    sm: "350px",
                    xs: "350px",
                  },
                  justifyContent: "space-around",
                }}
                className="animate__animated animate__slideInLeft"
              >
                <Box
                  onClick={() => {
                    router.push("https://web.whatsapp.com/");
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      scale: "1.2",
                      transition: "0.3s",
                    },
                  }}
                >
                  <BsWhatsapp color="#fff" />
                  <Typography color="#fff">Whatsapp</Typography>
                </Box>

                <Box
                  onClick={() => {
                    router.push("https://www.instagram.com/accounts/login");
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    transition: "0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      scale: "1.2",
                      transition: "0.3s",
                    },
                  }}
                >
                  <FiInstagram color="#fff" />
                  <Typography color="#fff">Instagram</Typography>
                </Box>

                <Box
                  onClick={() => {
                    router.push("https://www.linkedin.com/uas/login-submit");
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "35px",
                    alignItems: "center",
                    justifyContent: "center",
                    // bgcolor:'grey',
                    gap: 1,
                    padding: "10px 15px",
                    transition: "0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      scale: "1.2",
                      transition: "0.3s",
                    },
                  }}
                >
                  <IoLogoLinkedin color="#fff" />
                  <Typography color="#fff">Linkedin</Typography>
                </Box>
              </Stack>
            </Stack>
            {/* Social Info end */}
          </Box>

          <Stack
            className="animate__animated animate__zoomIn"
            sx={{
              width: {
                xl: "600px",
                lg: "600px",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
              bgcolor: "#e3ebebde",
              //   backgroundImage:"linear-gradient(to bottom right, #4d94ff, #66ccff)",
              color: "#6699ff",
              borderRadius: "20px",
              justifyContent: "space-around",
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
                padding: "20px 0 0 20px",
                color: "#0d0d0d",
              }}
            >
              Let's Start With{" "}
              <span style={{ color: "#4dc3ff" }}>Together.</span>
            </Typography>
            <Box
              gap={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "0 40px 30px 40px",
                color: "#6699ff",
              }}
            >
              <TextField
                variant="standard"
                label="Name"
                value={name}
                onChange={(e) => {
                  setInputdata({ ...inputdata, name: e.target.value });
                }}
              />
              <TextField
                variant="standard"
                label="Email"
                value={email}
                onChange={(e) => {
                  setInputdata({ ...inputdata, email: e.target.value });
                }}
              />
              <TextField
                variant="standard"
                label="Mobile Number"
                value={phone}
                onChange={(e) => {
                  setInputdata({ ...inputdata, phone: e.target.value });
                }}
              />
              <TextField
                variant="standard"
                label="Subject"
                value={subject}
                onChange={(e) => {
                  setInputdata({ ...inputdata, subject: e.target.value });
                }}
              />
              <TextField
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
                marginBottom: "20px",
              }}
            >
              <Button
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#4dc3ff",
                  padding: "5px 8px",
                  color: "#000",
                  borderRadius: "5px",
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "black",
                    borderRadius: "10px",
                  },
                }}
                onClick={() => {
                  handlesubmit();
                }}
              >
                Send Message
              </Button>
            </Box>
          </Stack>
        </Box>
      </Layout>
    </>
  );
}

export default Contact;
