import { Box, Button } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

export default function Register() {
  return (
    <>
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          boxShadow:5,
          width:'500px',
          margin:'auto',
          marginTop:5,
          marginBottom:5
        }}>
        <TextField
          id="outlined-FirstName-input"
          label="FirstName"
          type="FirstName"
          autoComplete="current-FirstName"
          sx={{ width: "310px" }}
        />
        <TextField
          id="outlined-LastName-input"
          label="LastName"
          type="LastName"
          autoComplete="current-LastName"
          sx={{ width: "310px" }}
        />
        <TextField
          id="outlined-Email-input"
          label="Email"
          type="Email"
          autoComplete="current-Email"
          sx={{ width: "310px" }}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ width: "310px" }}
        />
        <Button>register</Button>
      </Box>
    </>
  );
}
