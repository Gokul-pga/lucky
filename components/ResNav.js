import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from "next/router";
import  "animate.css";
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';




function NavBar() {

  const router =useRouter()
const [open, setOpen] = useState(false)

const [scroll, setScroll] = useState(false)
  

  useEffect(() => {
    window.addEventListener("scroll" , () =>{
      if (window.scrollY > 80) {
        setScroll(true)
      }else{
        setScroll(false)
      }
    })
  }, [1])

  const scrollup = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  



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

    <Stack  sx={{
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
    { open && <Box  className="animate__animated animate__fadeInDown"  sx={{
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
    { scroll && <IconButton sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        color:'#000',
        transition:'0.5s',
        bgcolor:'#a6a6a6',
        "&:hover":{
          bgcolor:'#595959',
          color:'#fff'
        }
}}
        onClick={scrollup}
>
     <  VerticalAlignTopIcon  />
      </IconButton> }
    </>
  );
}

export default NavBar;
