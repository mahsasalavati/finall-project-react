import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

export default function Discountproducts() {
  
  return (
    <Stack
      sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:'center', gap: 2, margin:5}}
    >
      <Stack
        sx={{
          width: 400,
          height: 200,
          borderRadius: 3,
          background:
            "linear-gradient(315deg, rgba(216,210,194,1) 0%, rgba(177,116,87,1) 100%)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box component={"img"} sx={{ width: "30%", overflow: "hidden" }}></Box>
        <Stack sx={{ display: "flex", justifyContent: "center" }}>
          <Typography component={"h3"} sx={{ paddingLeft: 5 }}>
            UP TO 60% DISCOUNT
          </Typography>
          <Typography sx={{ paddingLeft: 12, cursor:'pointer' }} href="#">
            Shop now
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: 400,
          height: 200,
          borderRadius: 3,
          background:
            "linear-gradient(315deg, rgba(216,210,194,1) 0%, rgba(177,116,87,1) 100%)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box component={"img"} sx={{ width: "30%", overflow: "hidden" }}></Box>
        <Stack sx={{ display: "flex", justifyContent: "center" }}>
        <Typography component={"h3"} sx={{ paddingLeft: 5 }}>
            UP TO 40% DISCOUNT
          </Typography>
          <Typography sx={{ paddingLeft: 12, cursor:'pointer' }} href="#">
            Shop now
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: 400,
          height: 200,
          borderRadius: 3,
          background:
            "linear-gradient(315deg, rgba(216,210,194,1) 0%, rgba(177,116,87,1) 100%)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box component={"img"} sx={{ width: "30%", overflow: "hidden" }}></Box>
        <Stack sx={{ display: "flex", justifyContent: "center" }}>
        <Typography component={"h3"} sx={{ paddingLeft: 5 }}>
            UP TO 20% DISCOUNT
          </Typography>
          <Typography sx={{ paddingLeft: 12, cursor:'pointer' }} href="#">
            Shop now
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
