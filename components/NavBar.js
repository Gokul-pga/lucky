import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import logo from "../assests/logo.jpeg";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Modalpage from "./Modalpage";




function NavBar() {
  
  const router = useRouter()
  const [open, setOpen] = useState(false)


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
      title: "Contact",
      to: "/contact",
    },
  ];

  return (
    <>
      <Stack
        flex={1}
        direction='row'
        className="animate__animated animate__backInDown"
        sx={{
          flexDirection:{
            xl:"row",
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column"},
          width: "100%",
          textAlign: "center",
          justifyContent: "space-around",
          margin: "10 0",
          padding: "10px 0",
          // backgroundColor:'#e6b3ff'
        }}
      >
        <Box
          sx={{
            color: "#acafb0",
            // backgroundColor:'grey'
          }}
        >
          <Image src={logo} alt="image" height="80" width="180" />
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
                onClick={()=>{router.push(item.to)}}
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
            onClick={() => {setOpen(true)}}
            
          >
            Contact Our Team
          </Typography>
          { open && <Modalpage open={open} setOpen={setOpen}/>}

                {/* ---------------------- Modal page Open ------------------------ */}

         
        </Box>
      </Stack>
    </>
  );
}

export default NavBar;
