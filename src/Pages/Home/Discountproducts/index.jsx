import { Box, Stack } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

export default function Discountproducts() {
  return (
    <Stack
      sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 2, margin:5}}
    >
      <Stack
        sx={{
          width: 400,
          height: 200,
          borderRadius: 3,
          background:
            "linear-gradient(315deg, rgba(195,166,34,1) 0%, rgba(253,45,95,1) 100%)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box component={"img"} sx={{ width: "30%", overflow: "hidden" }}></Box>
        <Stack sx={{ display: "flex", justifyContent: "center" }}>
          <Box component={"h3"} sx={{ paddingLeft: 5 }}>
            UP TO 60% DISCOUNT
          </Box>
          <Link sx={{ paddingLeft: 12 }} href="#">
            Shop now
          </Link>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: 400,
          height: 200,
          borderRadius: 3,
          background:
            "linear-gradient(315deg, rgba(195,166,34,1) 0%, rgba(253,45,95,1) 100%)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box component={"img"} sx={{ width: "30%", overflow: "hidden" }}></Box>
        <Stack sx={{ display: "flex", justifyContent: "center" }}>
          <Box component={"h3"} sx={{ paddingLeft: 5 }}>
            UP TO 60% DISCOUNT
          </Box>
          <Link sx={{ paddingLeft: 12 }} href="#">
            Shop now
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
