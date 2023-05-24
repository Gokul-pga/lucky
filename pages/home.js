import Layout from "@/components/Layout";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
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
                flexDirection: {
                  xl: "row",
                  lg: "row",
                  md: "column",
                  sm: "column",
                  xs: "column",
                },
                width: "100%",
                gap: {
                  xl: 2,
                  lg: 2,
                  md: 0,
                  sm: 0,
                  xs: 0,
                },
                // bgcolor: "greenyellow",
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  fontSize: {
                    xl: "30px",
                    lg: "30px",
                    md: "20px",
                    sm: "20px",
                    xs: "20px",
                  },
                  // bgcolor: "palegreen",
                  fontWeight: "bold",
                }}
              >
                <span style={{ color: "#eb8c34" }}> Welcome To</span> LuckyCharm Technologies
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xl: "20pxpx",
                    lg: "20pxpx",
                    md: "16px",
                    sm: "16px",
                    xs: "16px",
                  },
                  lineHeight: "2em",
                }}
              >
                Let's Work With together
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  color: "black",
                  lineHeight: "2em",
                  backgroundColor: "#b434eb",
                  padding: {
                    xl: "5px 20px",
                    lg: "5px 20px",
                    md: "3px 10px",
                    sm: "3px 10px",
                    xs: "3px 10px",
                  },
                  borderRadius: "10px",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "black",
                  },
                }}
              >
                Explore!
              </Button>
            </Box>
          </Stack>

          <Coursecard />
        </Box>
      </Layout>
    </>
  );
}

export default Homepg;
