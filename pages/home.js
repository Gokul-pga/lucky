import Layout from "@/components/Layout";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../assests/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Coursecard from "@/homepgcomponent/Coursecard";

function Homepg() {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Box sx={{ width: "100%", margin: "10px 0" }}>
          <Stack
            flex={1}
            sx={{
              flexDirection: "column",
              width: "80%",
              padding: "40px 20px",
              margin: "10px 0 0 50px",
              boxShadow: "10px 10px 5px #cccccc",
            }}
          >
            {/* <Typography
              sx={{ fontSize: "35px", lineHeight: "2em", fontWeight: "bold" }}
            >
              LuckyCharm
            </Typography> */}
            <Box
              sx={{
                display: "flex",
                flexDirection:{
                  xl:'row',
                  lg:'row',
                  md:'column',
                  sm:'column',
                  xs:'column',
              },
                width: "70%",
                gap:{
                  xl:2,
                  lg:2,
                  md:0,
                  sm:0,
                  xs:0,
              },
              }}
            >
              <Typography
                sx={{ fontSize: "35px", fontWeight: "bold", color: "#eb8c34" }}
              >
                Welcome To
              </Typography>
              <Typography sx={{ fontSize: "35px", fontWeight: "bold" }}>
                {" "}
                LuckyCharm Technologies
              </Typography>
             
            </Box>
            <Typography sx={{ fontSize: "20px", lineHeight: "2em" }}>
              Let's Work With together
            </Typography>
            <Button
              sx={{
                color: "black",
                lineHeight: "2em",
                backgroundColor: "#b434eb",
                width: "20%",
                borderRadius: "20px",
              }}
            >
              Explore!
            </Button>
          </Stack>

          <Coursecard />
        </Box>
      </Layout>
    </>
  );
}

export default Homepg;
