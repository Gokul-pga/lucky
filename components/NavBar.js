import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { adminsignup } from "../pages/adminsignup";

function NavBar() {
  const [open, setOpen] = useState(false);
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
            sm: "column",
            xs: "column",
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
            LuckyCharm
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
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
          onClick={() => {
            router.push("/adminsignup")
          }}
        >
          <Typography
            sx={{
              alignItems: "center",
              justifyContent: "space-around",
              padding: "4px 15px",
              backgroundColor: "grey",
              color: "#fff",
              borderRadius: 1,
              cursor: "pointer",
            }}
          >
            Admin
          </Typography>
        </Box>
       
      </Stack>
    </>
  );
}

export default NavBar;
