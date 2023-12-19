import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const location = router.pathname;

  const Nav = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Work",
      to: "/work",
    },
    {
      title: "Blog",
      to: "/blog",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ];

  return (
    <>
      <Stack
        flex={1}
        sx={{
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "row",
            xs: "row",
          },
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          // backgroundImage: "linear-gradient(to right, #4dc3ff, #3333ff)"
          backgroundColor: "#000",
        }}
      >
        <Box
          className="logotext"
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
            padding: "10px 0",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          <Typography
            fontSize="30px"
            color="#fff"
            fontFamily="revert-layer"
            onClick={() => {
              router.push("/");
            }}
          >
            ZoneLogic 
          </Typography>
        </Box>

        <Box
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
            width: "40%",
            padding: "10px 0",
            backgroundColor: "palegoldenrodl",
          }}
        >
          <Stack direction="row">
            {Nav.map((item, index) => {
              return (
                <Typography
                  key={index}
                  sx={{
                    padding: "10px 8px",
                    // backgroundColor:'palegreen',
                    width: "100%",
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: location == item.to ? "bold" : "100",
                    cursor: "pointer",
                    fontSize: "15px",
                    color: location == item.to ? "#99ddff" : "#fff",
                    transition: "0.3s",
                    "&:hover": {
                      color: location == item.to ? "#99ddff" : "#fff",
                      scale: "1.3",
                      fontWeight: location == item.to ? "bold" : "100",
                    },
                  }}
                  onClick={() => {
                    router.push(item.to);
                  }}
                >
                  {item.title}
                </Typography>
              );
            })}
          </Stack>
        </Box>
        <Box
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <button
            className="bg-white text-black font-medium px-3 py-1 rounded-sm text-md mt-1"
            onClick={() => {
              router.push("/adminLogin");
            }}
          >
            Admin
          </button>
        </Box>
      </Stack>
    </>
  );
}

export default NavBar;
