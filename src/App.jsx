import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './component/Navbar';
import Products from './Pages/Products';
import Home from './Pages/Home';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import { Cart, ProductDetails } from './Pages';
import About from './Pages/About';
import Contact from './Pages/Contact';


export default function App() {
  return (
    <>
    <CssBaseline/>
    <Navbar/>
    <Box>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:categories' element={<Products/>}/>
        <Route path='/product-details/:id/' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
    </Box>
    
    
    <Footer/>
      
    </>
  )
}
