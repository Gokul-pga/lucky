import Layout from "@/components/Layout";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { TbNumber1 } from 'react-icons/tb';
import { TbNumber2 } from 'react-icons/tb';
import { TbNumber } from 'react-icons/tb';
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';


function about() {
  return (
    <Layout>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            //bgcolor: "palegreen",
            mt: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "revert-layer",
              fontSize: {
                xl: "25px",
                lg: "25px",
                md: "25px",
                sm: "20px",
                xs: "20px",
              },
              color: "#fff",
              textAlign: "center",
            }}
          >
            We have A Creative Ideas And Solutions Based On Your Needs
          </Typography>
        </Box>
        <Box
          sx={{
            padding: {
              xl: "25px 55px 25px 55px",
              lg: "25px 55px 25px 55px",
              md: "25px 55px 25px 55px",
              sm: "20px 0 20px 0",
              xs: "20px 0 20px 0",
            },
          }}
        >
          <Typography
            sx={{ color: "#fff", textAlign: "justify", fontSize: "16px" }}
          >
            We bring success to your ideas through robust, feature-packed
            digital solutions, using our unparalleled imagination, creativity,
            and passion.
          </Typography>
        </Box>

        <Stack
          flex={1}
          sx={{
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: {
                xl: "50%",
                lg: "50%",
                md: "50%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            <Typography
              sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
            >
              Why Luckycharm ?
            </Typography>
            <Typography
              sx={{
                color: "#b5bbbd",
                fontSize: "16px",
                mt: "10px",
                textAlign: "justify",
              }}
            >
              True to our name we have been providingLuckycharm Tecnologies. We
              are a Digital Solutions Company specializing in delivering
              high-quality Web Design and Development, Mobile Applications, PLC
              Programming, Embedded System, and Automation.
            </Typography>
          </Box>

          <Box
            sx={{
              width: {
                xl: "50%",
                lg: "50%",
                md: "50%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            <Box sx={{
                margin:'0 0 10px 0'
            }}>
              <Typography
                sx={{
                    width: {
                        xl: "100%",
                        lg: "100%",
                        md: "100%",
                        sm: "75%",
                        xs: "75%",
                      },
                  color: "#000",
                  fontSize: "20px",
                  bgcolor: "#fff",
                  padding:"5px 0 5px 10px",
                  fontWeight:"bold",
                borderRadius:'5px'
                }}
              >
                Our process :)
              </Typography>
            </Box>

            <Box>
             
                <Box>
                <Typography
                sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
              >
                1 Analyze
              </Typography>
                </Box>
                
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  mt: "10px",
                  textAlign: "justify",
                  lineHeight: "2",
                  color: "#b5bbbd",
                }}
              >
                We start by acquiring a clear understanding of who your
                customers, and what your digital business objectives are. Then,
                our team proceeds by developing a road map to realize them with
                strategic milestones and timelines
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
}

export default about;
