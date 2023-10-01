import Layout from "@/components/Layout";
import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import "../styles/work.module.css";

function Work() {
  return (
    <>
      <Layout>
        <Stack
          flex={1}
          sx={{
            width: "100%",
            flexDirection: "column",
            gap: {
              xl: 5,
              lg: 5,
              md: 7,
              sm: 7,
              xs: 7,
            },
          }}
        >
          {/* ------------------------------------- Web Developement start----------------------------------- */}
          <Stack
            gap={2}
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              padding: {
                xl: "20px 20px",
                lg: "20px 20px",
                md: "20px 20px",
                sm: "20px 20px",
                xs: "20px 20px",
              },
            }}
          >
            <Box
              className="animate__animated animate__zoomInLeft"
              sx={{
                width: {
                  xl: "60%",
                  lg: "60%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
                flex: 1,
                borderRadius: "10px",
              }}
            >
              <Image
                src={require("../assests/webdev.gif")}
                alt="Web Developement"
                layout="responsive"
                style={{ borderRadius: "10px" }}
              />
            </Box>
            <Box
              className="animate__animated animate__zoomInRight"
              sx={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                width: {
                  xl: "40%",
                  lg: "40%",
                  md: "95%",
                  sm: "95%",
                  xs: "95%",
                },
                textAlign: "left",
                padding: "10px 10px",
                justifyContent: "space-evenly",
                gap: 2,
                //bgcolor:'red'
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: "bold", color: "#fff" }}
              >
                Web Developement
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#bec1c2cc",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Front-end and Back-end
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#bec1c2cc",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                If you're looking for a web development firm that will
                prioritize your business and brand objectives, while also taking
                into consideration the all-elusive factor of uniqueness, then
                your search ends with Luckycarm.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#bec1c2cc",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                Having working with websites and applications developement by
                using HTML, CSS, Javascript, React JS and Next JS for Front-end
                and for backend technolog we have using MongoDB and MySQL for
                database to store the datas.
              </Typography>

              <Button
                sx={{
                  width: {
                    xl: "20%",
                    lg: "20%",
                    md: "20%",
                    sm: "20%",
                    xs: "40%",
                  },
                  padding: "5px 8px",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "600",
                  "&:hover": {
                    color: "black",
                    fontWeight: "bold",
                    transition: "0.3s",
                    bgcolor: "#99ddff",
                  },
                }}
              >
                Learn more!
              </Button>
            </Box>
          </Stack>
          {/* ------------------------------------- Web Developement end----------------------------------- */}

          {/* ------------------------------------- App Developement start----------------------------------- */}

          <Stack
            gap={2}
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              padding: {
                xl: "20px 20px",
                lg: "20px 20px",
                md: "20px 20px",
                sm: "20px 20px",
                xs: "20px 20px",
              },
              backgroundColor: "#00000079",
            }}
          >
            <Box
              className="animate__animated animate__zoomInLeft"
              sx={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                width: {
                  xl: "50%",
                  lg: "50%",
                  md: "95%",
                  sm: "95%",
                  xs: "95%",
                },
                textAlign: "left",
                padding: "10px 10px",
                justifyContent: "space-evenly",
                gap: 2,
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: "bold", color: "#fff" }}
              >
                App Developement
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#bec1c2cc",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                The app development process includes creating installable
                applications for the mobile devices and implementing backend
                services, for instance data access through an API. Testing the
                application on target devices is also part of the process.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#bec1c2cc",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                It's based on React, Facebook's JavaScript library for building
                user interfaces, but instead of targeting the browser, it
                targets mobile platforms.
              </Typography>
              <Button
                sx={{
                  width: {
                    xl: "20%",
                    lg: "20%",
                    md: "20%",
                    sm: "20%",
                    xs: "40%",
                  },
                  padding: "5px 8px",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "black",
                    fontWeight: "bold",
                    transition: "0.3s",
                    bgcolor: "#99ddff",
                  },
                }}
              >
                Learn more!
              </Button>
            </Box>

            <Box
              className="animate__animated animate__zoomInRight"
              sx={{
                width: {
                  flex: 1,
                  xl: "60%",
                  lg: "60%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
                borderRadius: "10px",
              }}
            >
              <Image
                src={require("../assests/appdev.gif")}
                alt="Web Developement"
                layout="responsive"
                width="700"
                height="500"
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Stack>
          {/* ------------------------------------- App Developement End----------------------------------- */}

          {/* --------------------------------- Embedded System Developement start----------------------------- */}

          <Stack
            gap={2}
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              padding: {
                xl: "10px 20px",
                lg: "10px 20px",
                md: "10px 20px",
                sm: "10px 20px",
                xs: "10px 20px",
              },
            }}
          >
            <Box
              className="animate__animated animate__zoomInLeft"
              sx={{
                width: {
                  flex: 1,
                  xl: "60%",
                  lg: "60%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              <Image
                src={require("../assests/embeddedsystem.gif")}
                alt="Embedded System"
                layout="responsive"
                style={{ borderRadius: "10px" }}
              />
            </Box>
            <Box
              className="animate__animated animate__zoomInRight"
              sx={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                width: {
                  xl: "40%",
                  lg: "40%",
                  md: "95%",
                  sm: "95%",
                  xs: "95%",
                },
                textAlign: "left",
                padding: "10px 10px",
                justifyContent: "space-evenly",
                gap: 2,
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: "bold", color: "#fff" }}
              >
                Embedded System
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#bec1c2cc",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                The embedded system is a combination of computer hardware and
                software designed for a specific function. Embedded systems may
                also function within a larger system. The systems can be
                programmable or have a fixed functionality.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#bec1c2cc",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                While embedded systems are computing systems, they can range
                from having no user interface (UI) -- for example, on devices
                designed to perform a single task -- to complex graphical user
                interfaces (GUIs), such as in mobile devices. User interfaces
                can include buttons, LEDs (light-emitting diodes) and
                touchscreen sensing. Some systems use remote user interfaces as
                well.
              </Typography>
              <Button
                sx={{
                  width: {
                    xl: "20%",
                    lg: "20%",
                    md: "20%",
                    sm: "20%",
                    xs: "40%",
                  },
                  padding: "5px 8px",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "black",
                    fontWeight: "bold",
                    transition: "0.3s",
                    bgcolor: "#99ddff",
                  },
                }}
              >
                Learn more!
              </Button>
            </Box>
          </Stack>
          {/* --------------------------------- Embedded System Developement End----------------------------- */}

          {/* --------------------------------- Automation System Developement start----------------------------- */}

          <Stack
            gap={2}
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              padding: {
                xl: "10px 20px",
                lg: "10px 20px",
                md: "10px 20px",
                sm: "10px 20px",
                xs: "10px 20px",
              },
              backgroundColor: "#00000079",
            }}
          >
            <Box
              className="animate__animated animate__zoomInLeft"
              sx={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                width: {
                  xl: "40%",
                  lg: "40%",
                  md: "95%",
                  sm: "95%",
                  xs: "95%",
                },
                textAlign: "left",
                padding: "10px 10px",
                justifyContent: "space-evenly",
                gap: 2,
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: "bold", color: "#fff" }}
              >
                Automation
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#bec1c2cc",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                Automation system is an integration of sensors, controls, and
                actuators designed to perform a function with minimal or no
                human intervention. The field concerned in this subject is
                called Mechatronics which is an interdisciplinary branch of
                engineering that combines mechanical, electrical, and electronic
                systems.
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#bec1c2cc",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                Most automation systems are derived from manual processes such
                as drilling, cutting, welding, and so on. These systems use
                robotic arms to manipulate the movement of the tool that
                performs the original function. Other applications, particularly
                in the field of process control, use automation to monitor and
                control process parameters.
              </Typography>
              <Button
                sx={{
                  width: {
                    xl: "20%",
                    lg: "20%",
                    md: "20%",
                    sm: "20%",
                    xs: "40%",
                  },
                  padding: "5px 8px",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "black",
                    fontWeight: "bold",
                    transition: "0.3s",
                    bgcolor: "#99ddff",
                  },
                }}
              >
                Learn more!
              </Button>
            </Box>

            <Box
              className="animate__animated animate__zoomInRight"
              sx={{
                width: {
                  flex: 1,
                  xl: "60%",
                  lg: "60%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
                borderRadius: "10px",
              }}
            >
              <Image
                src={require("../assests/arduino.gif")}
                alt="Automation"
                layout="responsive"
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Stack>
          {/* --------------------------------- Automation System Developement End----------------------------- */}

          {/* --------------------------------- PLC Programming Developement Start----------------------------- */}
          <Stack
            gap={2}
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              padding: {
                xl: "10px 20px",
                lg: "10px 20px",
                md: "10px 20px",
                sm: "10px 20px",
                xs: "10px 20px",
              },
              marginBottom: "25px",
            }}
          >
            <Box
              className="animate__animated animate__zoomInLeft"
              sx={{
                width: {
                  xl: "60%",
                  lg: "60%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
                flex: 1,
                borderRadius: "10px",
              }}
            >
              <Image
                src={require("../assests/plcimg.gif")}
                alt="PLC Programming"
                layout="responsive"
                style={{ borderRadius: "10px" }}
              />
            </Box>
            <Box
              className="animate__animated animate__zoomInRight"
              sx={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                width: {
                  xl: "40%",
                  lg: "40%",
                  md: "95%",
                  sm: "95%",
                  xs: "95%",
                },
                textAlign: "left",
                padding: "10px 10px",
                justifyContent: "space-evenly",
                gap: 2,
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: "bold", color: "#fff" }}
              >
                PLC programming
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#bec1c2cc",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                A programmable logic controller (PLC) is a small, modular solid
                state computer with customized instructions for performing a
                particular task. PLCs, which are used in industrial control
                systems (ICS) for a wide variety of industries, have largely
                replaced mechanical relays, drum sequencers and cam timers
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#bec1c2cc",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                PLCs act as the physical interfaces between devices on the plant
                or manufacturing floor and a SCADA or HMI system. PLCs can
                communicate, monitor, and control complex automated processes
                such as conveyors, temperature control, robot cells, and many
                other industrial machines.
              </Typography>

              <Button
                sx={{
                  width: {
                    xl: "20%",
                    lg: "20%",
                    md: "20%",
                    sm: "20%",
                    xs: "40%",
                  },
                  padding: "5px 8px",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  color: "#000",
                  textAlign: "center",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "black",
                    fontWeight: "bold",
                    transition: "0.3s",
                    bgcolor: "#99ddff",
                  },
                }}
              >
                Learn more!
              </Button>
            </Box>
          </Stack>
          {/* --------------------------------- PLC Programming Developement End----------------------------- */}
        </Stack>
      </Layout>
    </>
  );
}

export default Work;
