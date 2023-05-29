import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "animate.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor:'#e6e6e6',
  width: {
    xl: "40%",
    lg: "40%",
    md: "60%",
    sm: "60%",
    xs: "60%",
  },  boxShadow: 24,
  color: "Black",
  p: 4,
};

function Modalpage({ open, setOpen }) {
  const [inputdata, setInputdata] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })
  const {name,email,subject,message} = inputdata;
  const [validator, setValidator] = useState(false)

  const handleClose = () => setOpen(false);

  const handlesubmit = () => {
    if (name !== '' && email !== '' && subject !== '' && message !== '') {
      setInputdata({
        name:'',
    email:'',
    subject:'',
    message:''
      }) 
      console.log(inputdata);
      setValidator(false)
    }
    else{
      setValidator(true)
      
    }
     fetch("http://localhost:5000/register", {
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    }).then((res) => res.json()).then((data) => {console.log(data,"userRegister");
  });
  }

  return (
    <>
      <Modal 
        open={open}
        sx={{
          display: "flex",
          flexDirection:'row',
          backgroundColor: "#ebe4e491",
          alignItems: "center",
          justifyContent: "center",
          width:'100%',
          backgroundColor:"#ddd4d470"
        }}
      >
        <Stack flex={1} sx={style}>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
              padding: "20px",
              color: "#0d0d0d",
            }}
          >
            Let's Start With <span style={{ color: "#eb8c34" }}>Together.</span>
          </Typography>
          {validator && (<Typography sx={{color:'red',margin:'0 10px'}}>* All Fields are mandatory</Typography>)}
          <Box
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "30px",
              color: "#6699ff",
            }}
          >
            <TextField 
            id="outlined"
             variant="standard"
              label="Name" 
              value={name}
              onChange={(e) => {setInputdata({...inputdata,name:e.target.value})}}
              />

            <TextField
              id="outlined-controlled"
              variant="standard"
              label="Email"
              value={email}
              onChange={(e) =>{setInputdata({...inputdata,email:e.target.value})}}
            />
            <TextField
              id="outlined-controlled"
              variant="standard"
              label="Subject"
              value={subject}
              onChange={(e) =>{setInputdata({...inputdata,subject:e.target.value})}}
            />
            <TextField
              id="outlined-controlled"
              variant="standard"
              label="Message"
              value={message}
              onChange={(e) =>{setInputdata({...inputdata,message:e.target.value})}}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button
              sx={{
                backgroundColor: "black",
                padding: "5px 8px",
                color: "#fff",
                borderRadius: "0px",
                textAlign: "center",
                transition:'0.3s',
                "&:hover":{
                    backgroundColor:'green',
                    color:'#fff',
                    borderRadius: "10px",
                }
              }}
              onClick={() => {handlesubmit()}}
            >
              Send Message
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "black",
                padding: "5px 20px",
                borderRadius: "0px",
                color: "#fff",
                transition:'0.3s',
                textAlign: "center",
                "&:hover":{
                    backgroundColor:'red',
                    borderRadius: "10px",
                    color:'#fff'
                }
              }}
            >
              Cancel
            </Button>
          </Box>
        </Stack>
      </Modal>
    </>
  );
}

export default Modalpage;
