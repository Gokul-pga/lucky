import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect} from "react";
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { useState } from "react";



function Footer() {
  const router = useRouter();

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
  
  
  
  return (
    <>
      {/* ---------------- Footer Box Start------------------- */}
      <Stack
        flex={1}
        sx={{
          backgroundColor: "#00000079",
          width: "100%",
          position:'absolute'
        }}
      >
   

        {/*  -------------------- Footer Description Start ---------------------*/}
        <Stack>
          <Box
            sx={{
              color: "#b5bbbd",
              margin: "10px 30px",
              // backgroundColor:'yellowgreen'
            }}
          >
            <Typography color='#fff' fontSize="30px" letterSpacing='0.2em' fontWeight='bold' fontFamily='revert-layer'>LuckyCharm</Typography>
          </Box>

          <Stack
            flex={1}
            sx={{
              justifyContent: "space-around",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              margin: {
                md: "0 30px",
                sm: "0 30px",
                xs: "0 30px 20px 30px",
              },
            }}
          >
            <Box sx={{
              display:'flex',
              flexDirection:'column',
            }}>
              <Box
                sx={{
                  fontSize: "25px",
                  color: "#fff",
                  lineHeight: "3em",
                }}
              >
                Our Service
              </Box>
              <Box
                sx={{
                  color: "#b5bbbd",
                }}
              >
                <Typography sx={{ fontSize: "15px", lineHeight: "2em" }}>
                  Automation
                </Typography>
                <Typography sx={{ fontSize: "15px", lineHeight: "2em" }}>
                Embedded System
                </Typography>
                <Typography sx={{ fontSize: "15px", lineHeight: "2em" }}>
                   Mobile App Developement
                </Typography>
                <Typography sx={{ fontSize: "15px", lineHeight: "2em" }}>
                PLC Programming
                </Typography>
                <Typography sx={{ fontSize: "15px", lineHeight: "2em" }}>
                Web Developement 
                </Typography>
              </Box>
            </Box>

            <Box sx={{
              display:'flex',
              flexDirection:'column'
            }}>
              <Box
                sx={{
                  fontSize: "25px",
                  color: "#fff",
                  lineHeight: "3em",
                }}
              >
                Project Category
              </Box>
              <Box
                sx={{
                  color: "#b5bbbd",
                }}
              >
                <Typography sx={{ fontSize: "15px", lineHeight: "2em" }}>
                  Automobile
                </Typography>
                <Typography sx={{ fontSize: "15px", lineHeight: "2em" }}>
                Mechanical
                </Typography>
                <Typography sx={{ fontSize: "15px", lineHeight: "2em" }}>
                Mechatronics
                </Typography>
                <Typography sx={{ fontSize: "15px", lineHeight: "2em" }}>
                  Production
                </Typography>
                <Typography sx={{ fontSize: "15px", lineHeight: "2em" }}>
                Robotics
                </Typography>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  fontSize: "25px",
                  color: "#fff",
                  lineHeight: "3em",
                }}
              >
                Contact us
              </Box>
              <Box
                sx={{
                  color: "#b5bbbd",
                }}
              >
                <Typography sx={{ fontSize: "15px", lineHeight: "2em" }}>
                  info@luckycharm.com
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
        {/*  -------------------- Footer Description End ---------------------*/}
      </Stack>

      {/*  -------------------- Footer Box End ---------------------*/}
    
      { scroll && <IconButton sx={{
        position: "fixed",
        bottom: 20,
        right: 30,
        color:'#000',
        transition:'0.5s',
        bgcolor:'#fff',
        "&:hover":{
          bgcolor:'#595959',
          color:'#fff'
        }
}}
        onClick={scrollup}
>
     <  VerticalAlignTopIcon fontSize="large" />
      </IconButton> }
    </>
  );
}

export default Footer;
