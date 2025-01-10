import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './component/Navbar';
import Products from './Pages/Products';


export default function App() {
  return (
    <>
    <CssBaseline/>
    <Navbar/>
    <Products/>
      
    </>
  )
}
