import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import { useState } from "react";

function Footer() {
  const router = useRouter();

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [1]);

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ---------------- Footer Box Start------------------- */}
      <Stack
        flex={1}
        sx={{
          backgroundColor: "#000",
          width: "100%",
          position: "absolute",
        }}
      >
        {/*  -------------------- Footer Description Start ---------------------*/}
        <Stack>
          <Box
            className="logotext"
            sx={{
              color: "#b5bbbd",
              margin: "10px 30px",
              // backgroundColor:'yellowgreen'
            }}
          >
            <Typography
              color="#fff"
              fontSize="30px"
              letterSpacing="0.2em"
              fontWeight="bold"
              fontFamily="revert-layer"
            >
              ZoneLogic 
            </Typography>
          </Box>

          <Stack
            flex={1}
            gap={2}
            sx={{
              justifyContent: "space-around",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              margin: {
                md: "0 30px",
                sm: "0 30px",
                xs: "0 30px 20px 30px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  fontSize: "25px",
                  color: "#fff",
                  lineHeight: "1.5em",
                }}
              >
                Our Service
              </Box>
              <Box
                sx={{
                  color: "#b5bbbd",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "2em",
                    "&:hover": {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  Automation
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "2em",
                    "&:hover": {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  Embedded System
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "2em",
                    "&:hover": {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  Mobile App Developement
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "2em",
                    "&:hover": {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  PLC Programming
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "2em",
                    "&:hover": {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  Web Developement
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  fontSize: "25px",
                  color: "#fff",
                  lineHeight: "1.5em",
                }}
              >
                Project Category
              </Box>
              <Box
                sx={{
                  color: "#b5bbbd",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "2em",
                    "&:hover": {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  Automobile
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "2em",
                    "&:hover": {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  Mechanical
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "2em",
                    "&:hover": {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  Mechatronics
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "2em",
                    "&:hover": {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  Production
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "2em",
                    "&:hover": {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  Robotics
                </Typography>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  fontSize: "25px",
                  color: "#fff",
                  lineHeight: "1.5em",
                }}
              >
                Contact us
              </Box>
              <Box
                sx={{
                  color: "#b5bbbd",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "2em",
                    "&:hover": {
                      color: "#fff",
                      cursor: "pointer",
                    },
                  }}
                >
                  info@luckycharm.com
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
        {/*  -------------------- Footer Description End ---------------------*/}
      </Stack>

      {/*  -------------------- Footer Box End ---------------------*/}

      {scroll && (
        <IconButton
          className="bg-gray-400"
          sx={{
            position: "fixed",
            bottom: 20,
            right: 30,
            color: "#000",
            transition: "0.5s",
            zIndex: "1000",
            "&:hover": {
              bgcolor: "#595959",
              color: "#fff",
            },
          }}
          onClick={scrollup}
        >
          <VerticalAlignTopIcon fontSize="large" />
        </IconButton>
      )}
    </>
  );
}

export default Footer;
