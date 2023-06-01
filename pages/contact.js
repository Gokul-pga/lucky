import React, { useState } from "react";
import Layout from '@/components/Layout';
import {Box,Button,CardMedia,Stack,TextField,Typography,} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
 import { BsWhatsapp } from 'react-icons/bs';
 import { CiLinkedin } from 'react-icons/ci';
 import { FiInstagram } from 'react-icons/fi';

function Contact() {
    
  const [inputdata, setInputdata] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })
  const {name,email,subject,message} = inputdata;
  const [validator, setValidator] = useState(false)

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
     fetch("http://localhost:8000/user", {
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
      <Layout>
        <Box
          gap={3}
          sx={{
            padding:{xl:'20px 0',lg:'20px 0',md:'20px 10px',sm:'20px 10px',xs:'20px 10px'},
            display: "flex",
            flexDirection:{xl:"row",lg:'row',md:'column',sm:'column',xs:'column'},
            justifyContent:{xl:'space-around',lg:'space-around',sm:'space-around',md:'space-around',xs:'space-around'}
          }}
        >
          <Box gap={3} sx={{ display: "flex", flexDirection: "column", padding:"10px 20px" }}>
            <Typography
              className="animate__animated animate__zoomIn"
              sx={{ color: "black", fontSize: "20px" , fontWeight:'bold',fontFamily:'monospace' }}
            >
              CONTACT INFO
            </Typography>

            {/* start stack 1 */}
            <Box
              gap={4}
              sx={{ display: "flex", flexDirection: "column" }}
              className="animate__animated animate__slideInLeft"
            >
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <EmailOutlinedIcon
                  sx={{
                    color: "#fff",
                    fontSize: "29px",
                    backgroundImage:
                    "linear-gradient(to right bottom,#333333,#1a1a1a)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                />
                <Box sx={{ color: "#fff" }}>
                  <Typography color="black" fontWeight="bold" fontSize='16px'>
                    MAIL US
                  </Typography>
                  <Typography sx={{color: "#0d0d0d",fontSize:'14px'}}>......................</Typography>
                  <Typography sx={{color: "#0d0d0d",fontSize:'14px'}}>......................</Typography>
                </Box>
              </Stack>
              {/* end stack 1 */}

              {/* start stack 2 */}
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <LocalPhoneOutlinedIcon
                  sx={{
                    color: "#fff",
                    fontSize: "29px",
                    backgroundImage:
                      "linear-gradient(to right bottom,#333333,#1a1a1a)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                />
                <Box sx={{ color: "#fff" }}>
                  <Typography color="black" fontWeight="bold" fontSize='16px'>
                    CONTACT US
                  </Typography>
                  <Typography sx={{color: "#0d0d0d",fontSize:'14px'}}>......................</Typography>
                  <Typography sx={{color: "#0d0d0d",fontSize:'14px'}}>......................</Typography>
                </Box>
              </Stack>
              {/* end stack 2 */}

              {/* start stack 3 */}
              <Stack gap={2} sx={{ flexDirection: "row" }}>
                <RoomOutlinedIcon
                  sx={{
                    color: "#fff",
                    fontSize: "29px",
                    backgroundImage:"linear-gradient(to right bottom,#333333,#1a1a1a)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                />
                <Box sx={{ color: "#fff" }}>
                  <Typography color="black" fontWeight="bold" fontSize='16px' >
                    LOCATION
                  </Typography>
                  <Typography sx={{color: "#0d0d0d",fontSize:'14px'}}>......................</Typography>
                  <Typography sx={{color: "#0d0d0d",fontSize:'14px'}}>......................</Typography>
                </Box>
              </Stack>
            </Box>
            {/* end stack 3 */}

            {/* Social Info Start */}
            <Stack gap={2} sx={{ flexDirection: "column" }}>
              <Typography
                className="animate__animated animate__zoomIn"
                sx={{ color: "black", fontSize: "20px",fontWeight:'bold',fontFamily:'monospace',width:'100%' }}
              >
                SOCIAL INFO
              </Typography>
              <Stack
                gap={4}
                sx={{ flexDirection: "row",width:{xl:'300px',lg:'300px',md:'350px',sm:'350px',xs:'350px'},justifyContent:'space-around' }}
                className="animate__animated animate__slideInLeft"
              >
                <Box  sx={{display:'flex',
                flexDirection:'column',
                    fontSize:'35px',
                    alignItems:'center',
                    justifyContent:'center',
                    // bgcolor:'grey',
                    gap:1,
                    padding:'10px 15px'
                  }} > 
                  < BsWhatsapp />
                  <Typography>Whatsapp</Typography>
                  </Box>
                
                 
                
                  <Box  sx={{display:'flex',
                flexDirection:'column',
                    fontSize:'35px',
                    alignItems:'center',
                    justifyContent:'center',
                    // bgcolor:'grey',
                    gap:1,
                    padding:'10px 15px'
                  }} > 
                  < FiInstagram />
                  <Typography>Instagram</Typography>
                  </Box>

               <Box  sx={{display:'flex',
                flexDirection:'column',
                    fontSize:'35px',
                    alignItems:'center',
                    justifyContent:'center',
                    // bgcolor:'grey',
                    gap:1,
                    padding:'10px 15px'
                  }} > 
                  < CiLinkedin />
                  <Typography>Linkedin</Typography>
                  </Box>
                  
              </Stack>
            </Stack>
            {/* Social Info end */}
          </Box>

          <Stack
          className="animate__animated animate__zoomIn"
            sx={{
              width:{xl:"600px",lg:"600px",md:'100%',sm:'100%',xs:'100%'},
              bgcolor:'#e6e6e6',
            //   backgroundImage:"linear-gradient(to bottom right, #4d94ff, #66ccff)",
              color: "#6699ff",
              borderRadius: "20px",
              justifyContent:'space-around'
            }}
          >
           <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              fontSize: {
                xl: "30px",
                lg: "30px",
                md: "18px",
                sm: "18px",
                xs: "18px",
              },
              fontWeight: "bold",
              textAlign: "center",
              padding: "20px 0 0 20px",
              color: "#0d0d0d",
            }}
          >
            Let's Start With <span style={{ color: "#4dc3ff" }}>Together.</span>
          </Typography>
          {validator && (<Typography sx={{color:'red',margin:'0 10px'}}>* All Fields are mandatory</Typography>)}
          <Box
            gap={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0 30px 30px 30px",
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
              marginBottom:'20px'
            }}
          >
            <Button
              sx={{
                fontWeight:'bold',
                backgroundColor: "#fff",
                padding: "5px 8px",
                color: "black",
                borderRadius: "5px",
                textAlign: "center",
                transition:'0.3s',
                "&:hover":{
                    backgroundColor:'#fff',
                    color:'black',
                    borderRadius: "10px",
                }
              }}
              onClick={() => {handlesubmit()}}
            >
              Send Message
            </Button>
          </Box>

          </Stack>
        </Box>
      </Layout>
    </>
  );
}

export default Contact;