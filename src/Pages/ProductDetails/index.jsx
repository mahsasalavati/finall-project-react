import { Box, Card, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Button, CardMedia, Grid } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Store/Slice/CartSlice";


export default function ProductDetails() {
  const [productDetail, setProductDetail] = useState({title: "",price: "", description: "", image: [{url: ""}]});
  const { id } = useParams();
  const productQuantity = useSelector((state) => state.cart.items)?.filter(
    (e) => e.id == id
  )[0]?.cartQuantity;
  const dispatch=useDispatch()

  useEffect(() => {
    console.log(id);
    (async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/products?filters[id]=${id}&populate=image`
        );
        const data = await res.json();
        
        console.log(data.data[0].image[0].url);
        setProductDetail(data.data[0]);
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
                image={import.meta.env.VITE_BASE_URL + productDetail.image[0].url}
              />
            </Card>
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={8} sx={{paddingTop:20}}>
            <Typography variant="h4" component="h1" gutterBottom> 
              {productDetail.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {productDetail.description}
            </Typography>
            <Typography variant="h5" color="primary" sx={{marginTop:3}}>
              price: ${productDetail.price}
            </Typography>
            {productQuantity? (
            <Stack sx={{display:'flex', flexDirection:'row' ,marginTop:3}}>
            <Button disabled={productQuantity>=productDetail.quantity} onClick={()=>dispatch(addToCart(productDetail.id))} sx={{width:50}}>
              +
            </Button>
            <Typography sx={{width:50, textAlign:'center'}}>{productQuantity}</Typography>
            <Button onClick={()=>dispatch(removeFromCart(productDetail.id))} sx={{width:50}}>
              -
            </Button>
            </Stack>
            ):(
             <Button disabled={productQuantity>=productDetail.quantity}  onClick={()=>dispatch(addToCart(productDetail))} variant="contained" color="primary" size="large" sx={{width:180, marginTop:3}}>
              Add to Cart
            </Button>)}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
