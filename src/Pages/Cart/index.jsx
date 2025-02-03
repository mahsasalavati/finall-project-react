import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const productIds = cart.map((e) => e.id).join(",");
        const res = await fetch(`http://localhost:1337/api/products?filters[id][$in]=${productIds}&populate=image`);
        const data = await res.json();
        setCartItems(data.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (cart.length) {
      fetchCartItems();
    }
  }, [cart]);

  const renderedCartItems = cartItems.map((product, index) => {
    const quantity = cart.find((e) => e.id === product.id)?.cartQuantity ;
    
    return (
      <TableRow key={product.id}>
        <TableCell align="center">{product.id}</TableCell>
        <TableCell align="center">{product.title}</TableCell>
        <TableCell align="center">
          <img 
            src={import.meta.env.VITE_BASE_URL + (product.image?.[0]?.url)} 
            alt={product.title} 
            width={50} 
            height={50} 
          />
        </TableCell>
        <TableCell align="center">${product.price}</TableCell>
        <TableCell align="center">{quantity}</TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer sx={{height:'35vh'}} component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="cart table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderedCartItems}</TableBody>
      </Table>
    </TableContainer>
  );
}