import Layout from "@/components/Layout";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../assests/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";


function Homepg() {

    const router = useRouter()
  return (
    <>
      <Layout>
        <Box
          sx={{ backgroundColor: "#d1cec5", height: "100vh", width: "100%",margin:'10px 0'}}
        >
          <Stack
            flex={1}
            sx={{
              flexDirection: "column",
              width: "20%",
              border: "2px #bfbebb solid",
              padding: "10px 20px",
              
            }}
          >
            <Typography
              sx={{ fontSize: "35px", lineHeight: "2em", fontWeight: "bold" }}
            >
              LuckyCharm
            </Typography>
            <Typography sx={{ fontSize: "20px", lineHeight: "2em" }}>
              Let's Work With together
            </Typography>
            <Button sx={{ color: "black", backgroundColor: "#b434eb" }}> 
              Explore!
            </Button>
          </Stack>
        </Box>
      </Layout>
    </>
  );
}

export default Homepg;
