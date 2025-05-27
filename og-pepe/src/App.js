import "./App.css";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowToBuy from "./pages/howToBuy.js";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import pepeBanner1 from "./images/mini.png"; // Replace with your uploaded image

function App() {
  return (
    <div className="App">
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#0f1a1f",
          px: 2,
        }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src={pepeBanner1}
              alt="Pepe"
              style={{ height: 90, marginRight: 12 }}
            />
          </Box>
          <Box>
            <Button sx={{ color: "#ffffff" }} href="about">
              About
            </Button>
            <Button sx={{ color: "#ffffff" }} href="how-to-buy">
              How to Buy
            </Button>
            <Button sx={{ color: "#ffffff" }} href="https://x.com/PepeOnHyper">
              Twitter
            </Button>
            <Button
              sx={{ color: "#ffffff" }}
              href="https://t.me/HyperPepeHyperEVM" //a
            >
              Telegram
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
        </Routes>
      </Router>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#0f1a1f",
          color: "#c2c8d0",
          py: 4,
          mt: 10,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="body2" sx={{ mb: 1 }}>
            Disclaimer
          </Typography>
          <Typography variant="body2">
            Pepe on HyperEVM has no official affiliation with Pepe the Frog,
            Boy’s Club or creator Matt Furie. $PEPE on HyperEVM is a meme coin
            that has no intrinsic value, with no expectation of financial
            returns and is created for entertainment purposes only.
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default App;
