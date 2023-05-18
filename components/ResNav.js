import { Box, Button, Stack, Typography } from "@mui/material";
import logo from "../assests/logo.png";
import React from "react";
import Image from "next/image";

function NavBar() {
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
      title: "Service",
      to: "/service",
    },
    {
      title: "Contact us",
      to: "/contact",
    },
  ];

  return (
    <>
      <Stack
        flex={1}
        direction="row"
        className="animate__animated animate__backInDown"
        sx={{
          display:{
            xl:"none",
            lg: "none",
            md: "block",
            sm: "block",
            xs: "block"},
          width: "100%",
          textAlign: "center",
          justifyContent: "space-around",
          margin: "10 0",
          padding: "10px 0",
          // backgroundColor:'palegreen'
        }}
      >
        <Box
          sx={{
            color: "#acafb0",
            // backgroundColor:'grey'
          }}
        >
          <Image src={logo} alt="image" height="70" width="170" />
        </Box>

        <Stack
          direction="row"
          sx={{
            width: "40%",
            alignItems: "center",
            justifyContent: "space-around",
            color: "#080808",
            fontWeight: "bold",
            // backgroundColor:'grey'
          }}
        >
          {Nav.map((item, index) => {
            return (
              <Typography
                key={index}
                sx={{
                  cursor: "pointer",
                  fontSize: "15px",
                  color: "#",
                  "&:hover": {
                    color: "#eb8c34",
                  },
                }}
              >
                {item.title}
              </Typography>
            );
          })}
        </Stack>
        <Box>
          <Typography
            sx={{
              alignItems: "center",
              justifyContent: "space-around",
              padding: "10px 15px",
              backgroundColor: "#b434eb",
              borderRadius: 8,
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            Contact Our Team
          </Typography>
        </Box>
      </Stack>
    </>
  );
}

export default NavBar;
