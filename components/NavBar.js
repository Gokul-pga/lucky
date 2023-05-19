import { Box, Button, Modal, Stack, TextField, Typography } from "@mui/material";
import logo from "../assests/logo.png";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  color:'Black',
  p: 4,
};


function NavBar() {
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      title: "Contact us",
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
            md: "none",
            sm: "none",
            xs: "none"},
          width: "100%",
          textAlign: "center",
          justifyContent: "space-around",
          margin: "10 0",
          padding: "10px 0",
          backgroundColor:'#e6b3ff'
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
            onClick={handleOpen}
            
          >
            Contact Our Team
          </Typography>

                {/* ---------------------- Modal page Open ------------------------ */}

          <Modal open={open}  onClose={handleClose} sx={{display:'flex',backgroundColor:'#ebe4e491'}}>
     <Stack flex={1} sx={style}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                fontSize: "35px",
                fontWeight: "bold",
                textAlign: "center",
                padding: "20px",
                color: "#0d0d0d",
              }}
            >
              Let's Start With <span style={{color:'#eb8c34'}}>Together.</span>
            </Typography>
            <Box
              gap={2}
              sx={{ display: "flex", flexDirection: "column", padding: "30px",color:'#6699ff' }}
            >
              <TextField sx={{color:'#fff'}} id="outlined" variant="standard" label="Name"  />
              <TextField id="outlined-controlled" variant="standard" label="Email" />
              <TextField id="outlined-controlled" variant="standard" label="Subject" />
              <TextField id="outlined-controlled" variant="standard" label="Message" />
              <Typography sx={{backgroundColor:'#b434eb',padding:'10px',borderRadius:'10px',color:'#0d0d0d',textAlign:'center'}}>Send Message</Typography>
            </Box>
          </Stack>
     </Modal>
        </Box>
      </Stack>
    </>
  );
}

export default NavBar;
