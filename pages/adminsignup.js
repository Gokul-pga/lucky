import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import AdminLogin from "./adminLogin";
import Layout from "../components/Layout";

function Adminsignup() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#000000d7",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            zIndex:"1002"
          }}
        >
          <Stack
            gap={2}
            direction="column"
            sx={{
              width: {
                xl: "30%",
                lg: "30%",
                md: "50%",
                sm: "70%",
                xs: "70%",
              },
              backgroundColor: "#000000e3",
              boxShadow: 24,
              color: "Black",
              p: 2,
              borderRadius: "10px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "0 25px",
              }}
            >
              <div>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: {
                      xl: "23px",
                      lg: "23px",
                      md: "18px",
                      sm: "18px",
                      xs: "18px",
                    },
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  Admin Login
                </Typography>
              </div>
              <div
                onClick={() => {
                  router.push("/");
                }}
                className="cursor-pointer"
              >
                <AiOutlineClose className="text-white text-xl" />
              </div>
            </Box>

            <Box
              gap={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "#6699ff",
                width: "90%",
                padding: " 0 0",
              }}
            >
              <TextField
                sx={{
                  color: "#fff",
                  bgcolor: "#fff",
                }}
                id="outlined"
                variant="filled"
                label="Email"
                //   value={name}
                //   onChange={(e) => {
                //     setInputdata({ ...inputdata, name: e.target.value });
                //   }}
              />

              <TextField
                sx={{
                  color: "#fff",
                  bgcolor: "#fff",
                }}
                id="outlined"
                variant="filled"
                label="Secret Key"
                //   value={email}
                //   onChange={(e) => {
                //     setInputdata({ ...inputdata, email: e.target.value });
                //   }}
              />
              <TextField
                sx={{
                  color: "#fff",
                  bgcolor: "#fff",
                }}
                type="password"
                id="outlined"
                variant="filled"
                label="Password"
                //   value={phone}
                //   onChange={(e) => {
                //     setInputdata({ ...inputdata, phone: e.target.value });
                //   }}
              />
            </Box>
            <div className="flex flex-col justify-center w-[90%] gap-2">
              <Button
                className="logobg w-full items-center "
                sx={{
                  color: "#fff",
                  // fontWeight:"bold",
                  padding: "4px 20px",
                  textAlign: "center",
                  transition: "0.3s",
                  padding: "10px 0",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
                //   onClick={() => {
                //     handlesubmit();
                //   }}
              >
                Login
              </Button>
              <div className="flex flex-row text-white text-md gap-1 w-full justify-center cursor-pointer">
                <div>Don't have account? </div>
                <div
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Signup
                </div>
                {open && <AdminLogin open={open} setOpen={setOpen} />}
              </div>
            </div>
          </Stack>
        </Box>
      </Layout>
    </>
  );
}

export default Adminsignup;
