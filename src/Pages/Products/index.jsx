import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [product, setProduct] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch();
        const data = await res.json();
      } catch (error) {}
    })();
  }, []);
  return (
    <>
      <Box
        sx={{
          width: 350,
          borderRadius: 2,
          padding: 3,
          boxShadow: 5,
          backgroundColor: "#FAF7F0",
        }}
      >
        <Box component={"img"}></Box>
        <Typography>Lorem ipsum dolor sit amet.</Typography>
        <Typography>25000</Typography>
        <Button sx={{ width: 100, backgroundColor: "#D8D2C2", marginTop: 2 }}>
          info
        </Button>
      </Box>
    </>
  );
}
