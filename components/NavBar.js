import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import logo from "../assests/logo.jpeg";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";



function NavBar() {
  
  const router = useRouter()
  const location = router.pathname


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
          flexDirection:{
            xl:"row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column"},
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          // backgroundImage: "linear-gradient(to right, #4dc3ff, #3333ff)"
          bgcolor:'#00000079'

        }}
      >
        <Box className="logotext"
          sx={{
            display:{
              xl:"block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none"},
            padding:'10px 0' ,
            fontWeight: "bold",
          }}
        >
          {/* <Image src={logo} alt="image" height="60" width="200" /> */}
          <Typography fontSize='30px' color='#fff' fontFamily='revert-layer' onClick= {() => {
      router.push("/contact")
    }}>LuckyCharm</Typography>
        </Box>

        <Box sx={{
          display:{
            xl:"block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none"},
            width: "40%",
            padding:'10px 0',
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
            textAlign:"center",
            justifyContent:'center',
            fontWeight: location == item.to ? "bold" : "100",
                  cursor: "pointer",
                  fontSize: "15px",
                  color: location == item.to ?  "#99ddff" : "#fff",                
                  transition:'0.3s',
                  "&:hover": {
                    color: location == item.to ? "#99ddff" : "#fff",
                    scale:"1.3",
                    fontWeight: location == item.to ? "bold" : "100",
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
