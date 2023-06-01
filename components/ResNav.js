import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from "next/router";


function NavBar() {

  const router =useRouter()
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
    <Stack direction='column'  sx={{
        display:{
            xl:"none",
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block"},
            width:'100%',

    }}>

    <Stack sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                padding:'10px 15px 20px 15px',
                bgcolor:'#333333',
                zIndex:'1001',
                position:'relative'
                }}
                >

    <Box sx={{
         display:{
            xl:"none",
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block"},
            }} >
    <Typography sx={{fontSize:"25px",fontFamily:'serif', color:'#fff'}}>LuckyCharm</Typography>
    </Box>

    <Box sx={{
             display:{
                xl:"none",
                lg: "none",
                md: "none",
                sm: "block",
                xs: "block"},
            color:'#fff',
            fontSize:'30px',
        }}
        onClick={() => {setOpen((p) => !p)}}>
        <AiOutlineMenu/>
        </Box>
    </Stack>
    { open && <Box  className="animate__animated animate__fadeInDown" on  sx={{
                display:'flex',
                flexDirection:'column',
                color:'#fff',
                alignItems:'center',
                width:'100%',
                position:'absolute',
                zIndex:'1000',
                bgcolor:'#333333',
                borderRadius:'0 0 15px 15px',
                padding: "8px 0 10px 0"
            }}>
                {Nav.map((item, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    router.push(item.to)
                  }}
                  sx={{ display:{
                    xl:"none",
                    lg: "none",
                    md: "none",
                    sm: "block",
                    xs: "block"},
                    color: "#fff",
                   fontSize:'16px'
                  }}
                >
                  {item.title}
                </Button>
              );
            })}
            </Box> }
    </Stack>
    </>
  );
}

export default NavBar;
