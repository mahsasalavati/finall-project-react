import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box, Stack } from "@mui/material";

export default function Products() {
  return (
    <>
      <Stack sx={{ direction:'rtl', paddingRight:22, color:'#91AC8F'}}>
        <h1>کیف</h1>
      </Stack>
      <Card sx={{ maxWidth: 250, borderRadius:5, margin:'auto'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image=""
            alt=""
          />
          
        </CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Lizard
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              price
            </Typography>
          </CardContent>
        <CardActions>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#91AC8F",
              width: 150,
              borderRadius: 50,
              margin: "auto",
            }}
          >
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
