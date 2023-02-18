import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingBag } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

import React from "react";

const NavBar = () => {
  return (
    <Box sx={{p: 2}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontFamily: "inherit", mx: 2, color: "#F1641D" }}>
            Betsy
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "10px",
            mx: 2,
          }}
        >
          <Typography sx={{ fontWeight: { sx: "lighter", sm: "bold" } }}>
            Sign in
          </Typography>
          <Typography sx={{fontSize: "130%"}}>🇪🇺</Typography>
          <IconButton>
            <FavoriteBorderIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton>
            <ShoppingBag sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly",alignItems: "center", py: 2 , width: "100%"}}>
        <Box>
          <IconButton >
            <MenuIcon sx={{justifySelf: "flex-end", alignSelf: "flex-end"}} />
          </IconButton>
        </Box>
        <Box>
          
        </Box>
        <Box
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, flexGrow: 1 }}
            placeholder="Search for anything..."
            inputProps={{ "aria-label": "Search for anything..." }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
