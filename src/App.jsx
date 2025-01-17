import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './component/Navbar';
import Products from './Pages/Products';
import Home from './Pages/Home';
import Footer from './component/Footer';


export default function App() {
  return (
    <>
    <CssBaseline/>
    <Navbar/>
    <Products/>
    <Home/>
    <Footer/>
      
    </>
  )
}
