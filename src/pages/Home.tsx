import { Box, Divider } from '@mui/material'
import React from 'react'
import Header from '../components/homeComponents/header/Header'
import Popular from '../components/homeComponents/popularItems/Popular'
import NavBar from '../components/NavBar/NavBar'

const Home = () => {
  return (
    <Box>
    <NavBar />
    <Header />
    <Popular />
    </Box>
  )
}

export default Home