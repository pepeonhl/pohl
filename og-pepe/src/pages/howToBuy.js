import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/system";

// Dark Theme (same as homepage)
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f1a1f",
    },
    primary: {
      main: "#00FFA3",
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

// Styled Components
const Title = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: 800,
  marginBottom: "1rem",
});

const InfoText = styled(Typography)({
  fontSize: "1.1rem",
  color: "#c2c8d0",
  marginBottom: "2rem",
});

export default function HowToBuy() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center", py: 10 }}>
          <Title>
            How to Buy $PEPE on{" "}
            <span style={{ color: "#00FFA3" }}> HyperEVM</span>
          </Title>
          <InfoText>
            You can buy $PEPE on HyperEVM using the official swap at Hyperswap.
            Just connect your wallet and trade your tokens seamlessly on-chain.
          </InfoText>
          <InfoText>CA: 0xFcEB0b02c8972977FaC85C476d4354F501B9c6e4</InfoText>
          <InfoText>
            You can also use a telegram HyperEVMSniperBot to make purchases.
          </InfoText>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="https://app.hyperswap.exchange/#/swap?outputCurrency=0xFcEB0b02c8972977FaC85C476d4354F501B9c6e4"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: "bold", px: 4, py: 1.5, m: 2 }}
          >
            Launch Hyperswap
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="https://t.me/HyperEVMSniperBot?start=YAK6QS"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: "bold", px: 4, py: 1.5 }}
          >
            Telegram Bot
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
