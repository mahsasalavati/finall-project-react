import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Card from "./ProductCard";

export default function Products() {
  const [product, setProduct] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProduct(data);
       
      } catch (error) {}
    })();
  }, []);
   

  const items=product?.map((e, index)=>(<Card name={e.name} price={e.price} key={index} image={e.image}/>))
  return (
    <>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap', gap:5}}>
        {items}
      </Box>
    </>
  );
}




