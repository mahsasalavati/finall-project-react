import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TableFooter,
} from "@mui/material";
import { addToCart, removeFromCart , clear} from "../../Store/Slice/CartSlice";


export default function Cart() {
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);
  const dispatch = useDispatch();

  const handleIncrement = (product) => {
    dispatch(addToCart(product.id)); 
  };

  const handleDecrement = (product) => {
    dispatch(removeFromCart(product.id)); 
  };

  const handleClear = (product) => {
    dispatch(clear(product.id)); 
  };


  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      const quantity = cart.find((e) => e.id === product.id)?.cartQuantity;
      return total + product.price * quantity;
    }, 0); // Start with a total of 0
  };

  const totalPrice = calculateTotalPrice();
  
  const renderedCartItems = cart.map((product, index) => {
  const quantity = cart.find((e) => e.id === product.id)?.cartQuantity;
  console.log(quantity);

  
  

    return (
      <TableRow key={index}>
        <TableCell align="center">{product.id}</TableCell>
        <TableCell align="center">{product.title}</TableCell>
        <TableCell align="center">
          <img
            src={import.meta.env.VITE_BASE_URL + product.image?.[0]?.url}
            alt={product.title}
            width={50}
            height={50}
          />
        </TableCell>
        <TableCell align="center">${product.price}</TableCell>
        <TableCell align="center">{quantity}</TableCell>
        <TableCell align="center">${product.price * quantity}</TableCell>
        <TableCell align="center">
          <Button onClick={()=>handleIncrement(product)}>+</Button>
        </TableCell>
        <TableCell align="center">
          <Button onClick={()=>handleDecrement(product)}>-</Button>
        </TableCell>
        <TableCell align="center">
          <Button onClick={()=>handleClear(product)}>clear</Button>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer sx={{ height: "80vh" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="cart table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total price</TableCell>
            <TableCell align="center"> Add</TableCell>
            <TableCell align="center">remove</TableCell>
            <TableCell align="center"> Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderedCartItems}</TableBody>
        <TableFooter>
        <TableRow>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">Total Price</TableCell>
                  <TableCell align="center">${totalPrice}</TableCell>
                </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
