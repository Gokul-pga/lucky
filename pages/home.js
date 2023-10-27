import Layout from "@/components/Layout";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import Modalpage from "../components/Modalpage";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import CourseCard from "@/components/CourseCard";
import { useSelector } from "react-redux";

function Homepg() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const fetchcard = useSelector((state) => state.tasks.fetchcard);

  const router = useRouter();
  return (
    <>
      <Layout>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: "10px 0",
            bgcolor: "#050505e5",
          }}
        >
          <Stack
            flex={1}
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              width: "80%",
              padding: "40px 20px",
              // boxShadow: "10px 10px 5px #cccccc",
              borderRadius: "10px",
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
                flexDirection: "column",
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
                  fontFamily: "revert-layer",
                  color: "#fff",
                }}
              >
                Welcome To LuckyCharm Technologies
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "25pxpx",
                      lg: "25pxpx",
                      md: "20px",
                      sm: "20px",
                      xs: "20px",
                    },
                    lineHeight: "2em",
                    fontFamily: "revert-layer",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Let's Work With together
                </Typography>
              </Box>
            </Box>

            <Box>
              <Button
                className="bg-gray-600 "
                sx={{
                  padding: {
                    xl: "5px 80px",
                    lg: "5px 80px",
                    md: "3px 10px",
                    sm: "3px 10px",
                    xs: "3px 10px",
                  },
                  fontWeight: "bold",
                  borderRadius: "5px",
                  transition: "0.5s",
                  color: "#fff",
                  "&:hover": {
                    borderRadius: "5px",
                    color: "#fff",
                    backgroundColor: "#99ddff",
                  },
                }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                Contact Our Team
              </Button>
              {open && <Modalpage open={open} setOpen={setOpen} />}
            </Box>
          </Stack>

          <div className="flex flex-col gap-5 w-full items-center justify-between overflow-hidden">
            <div
              className="flex flex-row items-center mt-5 w-full justify-center text-lg md:text-3xl text-white font-medium "
              onClick={() => {
                setShow((p) => !p);
              }}
            >
              <div>Our Offerings</div>
              <RiArrowDownSLine />
            </div>
            {show && <CourseCard />}
          </div>
        </Box>
      </Layout>
    </>
  );
}

export default Homepg;
