import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import logo from "../assests/logo.jpeg";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";




function NavBar() {
  
  const router = useRouter()


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
        sx={{
          flexDirection:{
            xl:"row",
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column"},
          width: "100%",
          height:60,
          alignItems: "center",
          justifyContent: "space-around",
          backgroundImage: "linear-gradient(to right, #4dc3ff, #3333ff)"

        }}
      >
        <Box 
          sx={{
            display:{
              xl:"block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none"},
            color: "#acafb0",
            // backgroundColor:'grey'
          }}
        >
          {/* <Image src={logo} alt="image" height="60" width="200" /> */}
          <Typography fontSize='30px' color='#fff'>LuckyCharm</Typography>
        </Box>

        <Box sx={{
          display:{
            xl:"block",
            lg: "block",
            md: "none",
            sm: "none",
            xs: "none"},
            width: "40%",
            height:40,
            backgroundColor:'palegoldenrodl',
        }}>
        <Stack
          direction="row" 
          
        >
          {Nav.map((item, index) => {
            return (
              <Typography
                key={index}
                sx={{
            padding:'10px 8px',
            // backgroundColor:'palegreen',
            width:'100%',
            fontWeight: "600",
                  cursor: "pointer",
                  fontSize: "15px",
                  color: "#fff",                
                  transition:'0.3s',
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
        </Box>
        {/* <Box sx={{
           display:{
          xl:"block",
          lg: "block",
          md: "none",
          sm: "none",
          xs: "none"},
        }}>
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
        </Box> */}
      </Stack>
    </>
  );
}

export default NavBar;
