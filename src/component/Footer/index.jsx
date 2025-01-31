import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CallIcon from "@mui/icons-material/Call";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#4A4947",
          color: "white",
          display: "flex",
          justifyContent: "center",
          gap: 20,
          paddingTop: 5,
        }}
      >
        <Stack>
          <Typography sx={{ fontSize: 20 }}>About Us</Typography>
          <Typography sx={{ width: 400, fontSize: 15, paddingTop: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni
            error suscipit tempora officia architecto, adipisci sequi fugiat
            doloremque iure!
          </Typography>

          <Typography sx={{ padding: 2 }}>
            <CallIcon />
            +12913912329
          </Typography>
          <Typography sx={{ padding: 2 }}>
            <MarkunreadIcon />
            info@gmail.com
          </Typography>
        </Stack>

        <Stack>
          <Typography sx={{ fontSize: 20, paddingBottom: 2 }}>
            NEWSLETTER
          </Typography>
          <Typography sx={{ width: 350, fontSize: 15, paddingBottom: 2 }}>
            Do you want to receive the newest trends and special offers? Sign up
            and get 10% off
          </Typography>
          <Box
            sx={{
              width: 400,
              height: 50,
              border: 1,
              borderRadius: 50,
              position: "relative",
            }}
          >
            <Button
              sx={{
                width: 100,
                height: 50,
                backgroundColor: "#B17457",
                borderRadius: 50,
                position: "absolute",
                right: 0,
                color: "white",
              }}
            >
              Send
            </Button>
          </Box>
        </Stack>

        <Stack>
          <Typography sx={{ fontSize: 20 }} component={"h3"}>
            Follow Us
          </Typography>
          <Box>
            <InstagramIcon sx={{ margin: 1 }} />
            <FacebookIcon sx={{ margin: 1 }} />
            <TwitterIcon sx={{ margin: 1 }} />
            <YouTubeIcon sx={{ margin: 1 }} />
          </Box>
        </Stack>
      </Box>
      <Stack
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          backgroundColor: "#4A4947",
          width: "100%",
          borderTop: 1,
          borderColor: "white",
          paddingLeft: 14,
        }}
      >
        <Typography
          sx={{
            fontSize: 13,
            padding: "0 5px",
            cursor: "pointer",
            color: "white",
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            padding: "0 5px",
            cursor: "pointer",
            color: "white",
          }}
        >
          Contact
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            padding: "0 5px",
            cursor: "pointer",
            color: "white",
          }}
        >
          About US
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            padding: "0 5px",
            cursor: "pointer",
            color: "white",
          }}
        >
          Shop
        </Typography>
        <Typography
          component={"h3"}
          sx={{ color: "white", fontSize: 20, paddingLeft: 106 }}
        >
          LOGO
        </Typography>
      </Stack>
    </>
  );
}
