import React from "react";
import pepeImage from "../images/favicon.png"; // Replace with your uploaded image

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Grid,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/system";

// ---- DARK THEME CONFIG ----
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f1a1f",
      paper: "#12161c",
    },
    primary: {
      main: "#FFFFF",
    },
    text: {
      primary: "#ffffff",
      secondary: "#c2c8d0",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    button: {
      textTransform: "none",
    },
  },
});

// ---- CUSTOM STYLES ----
const HeroTitle = styled(Typography)({
  fontWeight: 800,
  fontSize: "2.5rem",
  marginBottom: "1rem",
});

const BulletList = styled("ul")({
  listStyle: "none",
  paddingLeft: 0,
  marginTop: "1rem",
  lineHeight: 1.8,
});

const BulletItem = styled("li")({
  fontSize: "1.05rem",
  color: "#c2c8d0",
});

export default function HomePage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
        {/* NAV */}

        {/* ABOUT SECTION */}
        <Container maxWidth="lg" id="about">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "100vh",
              gap: 6,
              py: 8,
            }}
          >
            {/* LEFT - TEXT */}
            <Box sx={{ flex: 1 }}>
              <HeroTitle>
                About Pepe On{" "}
                <span style={{ color: "#00FFA3" }}> HyperEVM</span>
              </HeroTitle>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", fontSize: "1.1rem" }}
              >
                Introducing the First <strong>$PEPE</strong> on{" "}
                <strong>HyperEVM CTO </strong>
                <br />
                <br />
                One day, driven by curiosity and the call of true
                decentralization, Pepe ventured beyond the noise of the old
                chains — and discovered HyperEVM. It was fast, and untamed. He
                knew this was the place. No taxes, no traps — just pure memetic
                fuel on-chain, unleashed for the people.
              </Typography>
            </Box>

            {/* RIGHT - IMAGE */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                borderRadius: 3,
              }}
            >
              <img
                src={pepeImage}
                alt="Pepe Meme"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
