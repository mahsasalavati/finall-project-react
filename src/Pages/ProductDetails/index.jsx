import { Box, Card, Stack } from '@mui/material'
import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export default function ProductDetails() {
  const [productDetail, setProductDetail]=useState()
  const {id}=useParams()
  useEffect(() => {
      (async () => {
        try {
          const res = await fetch(`http://localhost:1337/api/products?filters[id][$in][0]=${id}&populate=image`);
          const data = await res.json();
          setProductDetail(data.data);
         
        } catch (error) {}
      })();
    }, [id]);




  return (
    <>
                <Card>
              <CardMedia
                component="img"
                width="300"
                height="400" // Adjust height as needed
                image={`http://localhost:1337/${productDetail?.image}`}
                alt={productDetail?.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {productDetail?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productDetail?.description}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Price: ${productDetail?.price}
                </Typography>
                <Button variant="contained" onClick={() => addToCart(productDetail)} sx={{ mt: 2 }}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
    

      
    </>
  )
}
