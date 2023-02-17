import { Box, Typography } from '@mui/material'
import React from 'react'
import "./HeaderItem.css"
const HeaderItems = ({image, title}: {image: string, title:string}) => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: 2, p:1, borderBottom: "1px solid transparent"}} className="header_item">
        <img src={image} style={{height:"100px", width: "100px", borderRadius:"50%", backgroundColor: "black", marginBottom: "10px"}} className="header_item_img" alt={title}/>
        <Typography sx={{fontWeight: "100"}}>{title}</Typography>
    </Box>
  )
}

export default HeaderItems