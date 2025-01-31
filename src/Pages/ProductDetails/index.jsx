import { Box, Card, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Button, CardMedia, Grid } from "@mui/material";

export default function ProductDetails() {
  const [productDetail, setProductDetail] = useState([0]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/products?filters[id]=${id}&populate=image`
        );
        const data = await res.json();
        console.log(data);
        setProductDetail(data.data);
      } catch (error) {}
    })();
  }, [id]);

  return (
    <>
      <Container sx={{ p: 10}}>
        <Grid container spacing={4}>
          {/* Product Image */}
          <Grid width={350} height={'100%'}>
            <Card>
              <CardMedia
                component="img"
                image={import.meta.env.VITE_BASE_URL + productDetail.image}
              />
              
            </Card>
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" gutterBottom>
              {productDetail[0].title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {productDetail[0].description}
            </Typography>
            <Typography variant="h5" color="primary">
              price: ${productDetail[0].price}
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
