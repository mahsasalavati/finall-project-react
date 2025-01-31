import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ id, img, title, price, description }) {
  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ maxWidth: 300, backgroundColor: "#FAF7F0", boxShadow: 5 }}>
        <CardActionArea>
          <CardMedia sx={{width:300}} component="img" height="250"  image={img} />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            
            <Typography>Price : ${price}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => navigate(`/product-details/${id}`)}
            size="small"
            color="primary"
            sx={{ backgroundColor: "#D8D2C2", width: 200 }}
          >
            More Info
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
