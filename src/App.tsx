import React from 'react';
import { Container } from "@mui/material"
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <Container className="App" sx={{m:0, p:0}}>
      <Home />
    </Container>
  );
}

export default App;
