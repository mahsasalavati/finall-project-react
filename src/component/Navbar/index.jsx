import { Box, FormControl, InputLabel, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:1337/api/categories");
        const data = await res.json();
        setCategories(data.data);
      } catch (error) {}
    })();
  }, []);

  const category = categories?.map((e, index) => (
    <Button
      onClick={() => navigate(`/products/${e.Title}`)}
      sx={{
        padding: 2.5,
        marginLeft: 15,
      }}
      id={e.id}
      key={index}
    >
      {e.Title}
    </Button>
  ));

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          borderBottom: "1px solid gray",
          height: 60,
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

      <Box
        sx={{
          color: "gray",
          backgroundColor: "#D8D2C2",
        }}
      >
        {category}
      </Box>
    </>
  );
}
