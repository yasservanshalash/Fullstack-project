import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Footer = () => {
  return (
    <Box sx={{background: "#2F456C", border: "0px", display: "flex", flexDirection: "column", gap: "5px"}}>
    <Accordion sx={{background: "transparent", border:"0px", boxShadow: "0px 0px 0px", color: "white", borderRadius: "10px",px:1}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{background: "transparent"}}
      >
        <Typography>Shop</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          
        </Typography>
      </AccordionDetails>
    </Accordion >
    <Accordion sx={{background: "transparent", boxShadow: "0px 0px 0px", color: "white", px:1}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Sell</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{background: "transparent", boxShadow: "0px 0px 0px", color: "white", px:1}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>About</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{background: "transparent", boxShadow: "0px 0px 0px", color: "white", px:1}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Help</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
  )
}

export default Footer