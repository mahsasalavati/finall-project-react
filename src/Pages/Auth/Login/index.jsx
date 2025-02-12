import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ username: "", password: "" });
  const handleInputChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (!login.username || !login.password) {
      // prompt("Username and password are required.");
      return;
    }

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      const data = await res.json();
      console.log(data); // Log the successful response (contains token)

      // Store the token (e.g., in localStorage)
      localStorage.setItem("token", data.token);

      const token = localStorage.getItem('token'); // Get the token from localStorage

    if (token) {
      // User is logged in, redirect to cart
      navigate('/cart'); // Or your cart route
    } else {
      // User is not logged in, redirect to login
      navigate('/login');
    } }catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          boxShadow: 5,
          width: "500px",
          margin: "auto",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <TextField
          id="outlined-username-input"
          label="username"
          type="username"
          name="username"
          value={login.username}
          onChange={handleInputChange}
          autoComplete="current-username"
          sx={{ width: "310px" }}
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          value={login.password}
          onChange={handleInputChange}
          autoComplete="current-password"
          sx={{ width: "310px" }}
        />
        <Button
          onClick={handleLogin}
          sx={{ width: "310px", background: "#81c784", color: "white" }}
        >
          Login
        </Button>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={() => navigate("/register")} sx={{ color: "black" }}>
            Register
          </Button>
          <Button sx={{ color: "red" }}>Forget Password ?</Button>
        </Box>
      </Box>
    </>
  );
}
