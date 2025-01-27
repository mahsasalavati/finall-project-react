import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Card from "./ProductCard";

export default function Products() {
  const [product, setProduct] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:1337/api/products?populate=*');
        const data = await res.json();
        setProduct(data.data);
       
      } catch (error) {}
    })();
  }, []);
   

  const items=product?.map((e, index)=>(<Card title={e.title} categories={e.categories[0]} description={e.description} price={e.price} key={index} img={import.meta.env.VITE_BASE_URL + e.image[0].url}/>))

  return (
    <>
      <Box sx={{display:'flex', justifyContent:'center', flexWrap:'wrap', gap:5}}>
        {items}
      </Box>
    </>
  );
}




