import React from 'react';
import { Box, Container } from "@mui/material"
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <Box className="App" sx={{m:0, p:0, width: "100%"}}>
      <Home />
    </Box>
  );
}

export default App;
