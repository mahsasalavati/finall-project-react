import { Badge, Box, FormControl, InputLabel, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from '@mui/material/TextField';


export default function Navbar() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState();
  const Cartbadge = useSelector((state) => state.cart.items).length;
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
        color:"black"
      }}
      id={e.id}
      key={index}
    >
      {e.Title}
    </Button>
  ));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <Button sx={{color: "black"}} onClick={() => navigate(`/`)}>Home</Button>
        <Button sx={{color: "black"}} onClick={()=>navigate(`/contact`)}>contact</Button>
        <Button sx={{color: "black"}} onClick={() => navigate(`/about`)}>About Us</Button>
        <Box
      component="form"
      sx={{ '& > :not(style)': {width: '40ch' }, margin: "0 100px",
       }}
      noValidate
      autoComplete="off"
      
    >
      <TextField id="outlined-basic" label="Search" variant="outlined"/>
    
    </Box>
                
       
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <PersonOutlineIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>

        <Link to={"/cart"}>
          <Badge badgeContent={Cartbadge}>
            <LocalMallIcon />
          </Badge>
        </Link>

        <Button sx={{color:"black"}}>LOGIN</Button>
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
