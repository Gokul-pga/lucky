import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
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
  const handleClose = () => setOpen(false);

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
          <Box
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "30px",
              color: "#6699ff",
            }}
          >
            <TextField id="outlined" variant="standard" label="Name" />
            <TextField
              id="outlined-controlled"
              variant="standard"
              label="Email"
            />
            <TextField
              id="outlined-controlled"
              variant="standard"
              label="Subject"
            />
            <TextField
              id="outlined-controlled"
              variant="standard"
              label="Message"
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
                backgroundColor: "#b434eb",
                padding: "5px 8px",
                borderRadius: "10px",
                color: "#0d0d0d",
                textAlign: "center",
                "&:hover":{
                    backgroundColor:'black',
                    color:'#fff'
                }
              }}
            >
              Send Message
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "#b434eb",
                padding: "5px 20px",
                borderRadius: "10px",
                color: "#0d0d0d",
                textAlign: "center",
                "&:hover":{
                    backgroundColor:'black',
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
