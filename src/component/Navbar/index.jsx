import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Box, Button, Stack } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";
const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});

export default function Navbar() {
  return (
    <Stack component={"nav"}>
      <Box
        sx={{
          display: "flex",
          paddingTop: 5,
          paddingBottom: 3,
          paddingLeft: 20,
          gap: 4,
        }}
      >
        <LocalMallIcon
          sx={{ color: "#91AC8F", fontSize: 30, border: 2, borderRadius: 50 }}
        />
        <PersonIcon sx={{ color: "#91AC8F", fontSize: 30 }} />
        <Box sx={{ width: 50, height: 50, paddingLeft: 130 }}>LOGO</Box>
      </Box>

      <Stack
        sx={{
          height: 60,
          bgcolor: "#EFF3EA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Button sx={{color:'black'}}>کیف</Button>
        <Button sx={{color:'black'}}>پوشاک</Button>
        <Button sx={{color:'black'}}>ساعت</Button>
        <Button sx={{color:'black'}}>کفش</Button>
        <Button sx={{color:'black'}}>عینک</Button>
        <Button sx={{color:'black'}}>اکسسوری</Button>
        <Button sx={{color:'black'}}>کدمرسوله</Button>
      </Stack>
    </Stack>
  );
}
