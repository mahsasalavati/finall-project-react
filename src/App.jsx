import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './component/Navbar';
import Products from './Pages/Products';
import Home from './Pages/Home';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <>
    <CssBaseline/>
    <Navbar/>
    <Box>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        
      </Routes>
    </Box>
    
    
    <Footer/>
      
    </>
  )
}
