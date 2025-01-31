import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Card from "./ProductCard";
import { useParams } from "react-router-dom";

export default function Products() {
  const [product, setProduct] = useState([]);
  const { categories } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/products?filters[categories][Title][$eq]=${categories}&populate=image`
        );
        const data = await res.json();
        setProduct(data.data);
      } catch (error) {}
    })();
  }, [categories]);

  const items = product?.map((e, index) => (
    <Card
      title={e.title}
      categories={e.categories}
      description={e.description}
      price={e.price}
      key={index}
      id={e.id}
      img={import.meta.env.VITE_BASE_URL + e.image[0].url}
    />
  ));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 5,
        }}
      >
        {items}
      </Box>
    </>
  );
}
