import { Box, FormControl, InputLabel, Stack } from "@mui/material";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate=useNavigate()
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          borderBottom:'1px solid gray',
          height:60
        }}
      >
        <Box component={"h2"}>LOGO</Box>
        <Box>contact</Box>
        <Box>About Us</Box>
        <Box
          sx={{
            width: 400,
            height: 40,
            border: 1,
            borderRadius: 10,
            margin: "0 100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 10px",
          }}
        >
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </Box>
        <PersonOutlineIcon />
        <LocalMallIcon />

        <Button>LOGIN</Button>
      </Stack>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          color: "gray",
          backgroundColor:'#D8D2C2',
          padding:1
          
        }}
      >
        <Button onClick={()=> navigate(`/products/`)}>Women</Button>
        <Button onClick={()=> navigate(`/products`)}>Men</Button>
        <Button>Kids</Button>
        <Button>Home</Button>
        <Button>Shoes & Bags</Button>
        <Button>Sports</Button>
        <Button>Beauty</Button>
      </Stack>
    </>
  );
}
