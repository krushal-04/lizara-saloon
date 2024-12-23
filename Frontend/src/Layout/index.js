import React from 'react'
import { Outlet } from "react-router-dom";

import Navbar from '../components/Navbar';
import { AppBar } from '@mui/material';
import Footer from '../components/Footer';
const Index = () => {
  return (
    <div>
      <AppBar position="static">
        <Navbar />
      </AppBar>
      <Outlet />
      {/* <Footer/> */}

    </div>
  )
}

export default Index