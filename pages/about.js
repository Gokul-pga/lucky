import Layout from "@/components/Layout";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

function about() {
  return (
    <Layout>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          bgcolor: "#050505e5",
        }}
      >
        <Box
          sx={{
            //bgcolor: "palegreen",
            pt: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "revert-layer",
              fontSize: {
                xl: "30px",
                lg: "30px",
                md: "30px",
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
            sx={{
              color: "#fff",
              textAlign: "justify",
              fontSize: {
                xl: "18px",
                lg: "18px",
                md: "20px",
                sm: "16px",
                xs: "16px",
              },
            }}
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
                lineHeight: "1.5",
              }}
            >
              True to our name we have been providing Luckycharm Tecnologies. We
              are a Digital Solutions Company specializing in delivering
              high-quality Web Design and Development, Mobile Applications, PLC
              Programming, Embedded System, and Automation.
            </Typography>
          </Box>

          <Box
            gap={4}
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
            <Box
              sx={{
                margin: "0 0 10px 0",
              }}
            >
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
                  backgroundImage:
                    "linear-gradient(to right, #1ab2ff, #ff1aff)",
                  padding: "5px 0 5px 10px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                Our process :)
              </Typography>
            </Box>

            <Box sx={{ pb: "4px" }}>
              <Box>
                <Typography
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
                >
                  1. Analyze
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  mt: "10px",
                  textAlign: "justify",
                  lineHeight: "1.5",
                  color: "#b5bbbd",
                }}
              >
                We start by acquiring a clear understanding of who your
                customers, and what your digital business objectives are. Then,
                our team proceeds by developing a road map to realize them with
                strategic milestones and timelines
              </Typography>
            </Box>

            <Box sx={{ pb: "4px" }}>
              <Box>
                <Typography
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
                >
                  2. Research and Analysis
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  mt: "10px",
                  textAlign: "justify",
                  lineHeight: "1.5",
                  color: "#b5bbbd",
                }}
              >
                A customized solution is crafted keeping in mind end-user ease,
                speed, and fit-for-business solutions.
              </Typography>
            </Box>

            <Box sx={{ pb: "4px" }}>
              <Box>
                <Typography
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
                >
                  3. Delivery & Deployment
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  mt: "10px",
                  textAlign: "justify",
                  lineHeight: "1.5",
                  color: "#b5bbbd",
                }}
              >
                This tailor-made solution is tested against stringent standards
                for a hit-the ground running enterprise-wide deployment to
                achieve desired outcomes.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
}

export default about;
