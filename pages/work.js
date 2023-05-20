import Layout from "@/components/Layout";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

function Work() {
  return (
    <>
      <Layout>
        <Stack
          flex={1}
          gap={3}
          sx={{
            width: "100%",
            flexDirection:'column'
          }}
        >
          <Stack
            gap={2}
            sx={{
                flexDirection:{
                    xl:'row',
                    lg:'row',
                    md:'column',
                    sm:'column',
                    xs:'column',
                },
                padding:{
                    xl:'10px 20px',
                    lg:'10px 20px',
                    md:'5px 5px',
                    sm:'5px 5px',
                    xs:'5px 5px',
                },
              backgroundColor:'#e6e6e6',
            }}
          >
            <Box sx={{ width:{
                  xl:'60%',
                  lg:'60%',
                  md:'100%',
                  sm:'100%',
                  xs:'100%',
              },
               borderRadius: "10px" }}>
              <Image
                src={require("../assests/webdev.gif")}
                alt="Web Developement"
                width="10%"
                height="100px"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width:{
                    xl:'40%',
                    lg:'40%',
                    md:'95%',
                    sm:'95%',
                    xs:'95%',
                },
                alignItems: "center",
                padding: "10px 20px",
                justifyContent: "space-around",
                backgroundColor:'palegreen'
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: "bold", color: "#262626" }}
              >
                Web Developement
              </Typography>
              <Typography  sx={{
                  fontSize: "16px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
                >
                    Front-end and Back-end (or) Full-Stack Developement
                    </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                Web development is the building and maintenance of websites;
                it’s the work that happens behind the scenes to make a website
                look great, work fast and perform well with a seamless user
                experience.Web developers, or ‘devs’, do this by using a variety
                of coding languages. The languages they use depends on the types
                of tasks they are preforming and the platforms on which they are
                working.
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
               Web development skills are in high demand worldwide and well paid too – making development a great career option.The field of web development is generally broken down into front-end (the user-facing side) and back-end (the server side). Let’s delve into the details
              </Typography>
            </Box>
          </Stack>

          <Stack
            gap={2}
            sx={{width:'100%',
                flexDirection:{
                    xl:'row',
                    lg:'row',
                    md:'column',
                    sm:'column',
                    xs:'column',
                },
                padding:{
                    xl:'10px 20px',
                    lg:'10px 20px',
                    md:'5px 5px',
                    sm:'5px 5px',
                    xs:'5px 5px',
                },
              backgroundColor:'#e6e6e6',
            }}
          >
          <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width:{
                  xl:'50%',
                  lg:'50%',
                  md:'95%',
                  sm:'95%',
                  xs:'95%',
              },
                alignItems: "center",
                padding: "10px 20px",
                justifyContent: "space-around",
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: "bold", color: "#262626" }}
              >
                App Developement
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                Web development is the building and maintenance of websites;
                it’s the work that happens behind the scenes to make a website
                look great, work fast and perform well with a seamless user
                experience.Web developers, or ‘devs’, do this by using a variety
                of coding languages. The languages they use depends on the types
                of tasks they are preforming and the platforms on which they are
                working.
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                Having developed and delivered breathtaking websites and
                applications for over a decade now, our team of incredibly
                experienced web developers is well aware and versed with what it
                takes to deliver excellence across all fronts.
              </Typography>
            </Box>

            <Box sx={{ width: "60%", borderRadius: "10px" }}>
              <Image
                src={require("../assests/appdev.gif")}
                alt="Web Developement"
                width="10%"
                height="100px"
              />
            </Box>
          </Stack>

          <Stack
            gap={2}
            sx={{
              flexDirection: "row",
              padding: "10px 20px",
              backgroundColor:'#e6e6e6',
            }}
          >
            <Box sx={{ width: "60%", borderRadius: "10px",alignItems:'center' }}>
              <Image
                src={require("../assests/embeddedsystem.gif")}
                alt="Web Developement"
                width="10%"
                height="100px"

              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                alignItems: "center",
                padding: "10px 20px",
                justifyContent: "space-around",
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: "bold", color: "#262626" }}
              >
                Web Developement
              </Typography>
              <Typography  sx={{
                  fontSize: "16px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  fontWeight: "bold"
                }}
                >
                    Front-end and Back-end (or) Full-Stack Developement
                    </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                Web development is the building and maintenance of websites;
                it’s the work that happens behind the scenes to make a website
                look great, work fast and perform well with a seamless user
                experience.Web developers, or ‘devs’, do this by using a variety
                of coding languages. The languages they use depends on the types
                of tasks they are preforming and the platforms on which they are
                working.
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
               Web development skills are in high demand worldwide and well paid too – making development a great career option.The field of web development is generally broken down into front-end (the user-facing side) and back-end (the server side). Let’s delve into the details
              </Typography>
            </Box>
          </Stack>

          <Stack  gap={2}
            sx={{
              flexDirection: "row",
              padding: "10px 20px",
              // backgroundColor:'paleturquoise',
            }}>
          <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                alignItems: "center",
                padding: "10px 20px",
                justifyContent: "space-around",
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: "bold", color: "#262626" }}
              >
                App Developement
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                Web development is the building and maintenance of websites;
                it’s the work that happens behind the scenes to make a website
                look great, work fast and perform well with a seamless user
                experience.Web developers, or ‘devs’, do this by using a variety
                of coding languages. The languages they use depends on the types
                of tasks they are preforming and the platforms on which they are
                working.
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                Having developed and delivered breathtaking websites and
                applications for over a decade now, our team of incredibly
                experienced web developers is well aware and versed with what it
                takes to deliver excellence across all fronts.
              </Typography>
            </Box>

            <Box sx={{ width: "60%", borderRadius: "10px" }}>
              <Image
                src={require("../assests/arduino.gif")}
                alt="Web Developement"
                width="10%"
                height="100px"
              />
            </Box>
          </Stack>

          <Stack
            gap={2}
            sx={{
              flexDirection: "row",
              padding: "10px 20px",
              backgroundColor:'#e6e6e6',
            }}
          >
            <Box sx={{ width: "60%", borderRadius: "10px" }}>
              <Image
                src={require("../assests/plcimg.gif")}
                alt="Web Developement"
                width="10%"
                height="100px"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                alignItems: "center",
                padding: "10px 20px",
                justifyContent: "space-around",
              }}
            >
              <Typography
                sx={{ fontSize: "30px", fontWeight: "bold", color: "#262626" }}
              >
                Web Developement
              </Typography>
              <Typography  sx={{
                  fontSize: "16px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  fontWeight: "bold"
                }}
                >
                    Front-end and Back-end (or) Full-Stack Developement
                    </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
                Web development is the building and maintenance of websites;
                it’s the work that happens behind the scenes to make a website
                look great, work fast and perform well with a seamless user
                experience.Web developers, or ‘devs’, do this by using a variety
                of coding languages. The languages they use depends on the types
                of tasks they are preforming and the platforms on which they are
                working.
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#262626",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                }}
              >
               Web development skills are in high demand worldwide and well paid too – making development a great career option.The field of web development is generally broken down into front-end (the user-facing side) and back-end (the server side). Let’s delve into the details
              </Typography>
            </Box>
          </Stack>

        </Stack>
      </Layout>
    </>
  );
}

export default Work;
