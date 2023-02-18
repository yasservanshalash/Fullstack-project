import { Box, Divider } from '@mui/material'
import React from 'react'
import Header from '../components/homeComponents/header/Header'
import Popular from '../components/homeComponents/popularItems/Popular'
import NavBar from '../components/NavBar/NavBar'
import Gifts from '../components/homeComponents/gifts/Gifts'
const Home = () => {
  return (
    <Box sx={{width: "100%"}}>
    <NavBar />
    <Header />
    <Popular />
    <Gifts />
    </Box>
  )
}

export default Home