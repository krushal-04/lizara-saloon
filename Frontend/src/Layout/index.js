import React from 'react'
import { Outlet } from "react-router-dom";

import Navbar from '../components/Navbar';
import { AppBar } from '@mui/material';
const Index = () => {
  return (
    <div>
      <AppBar position="static">
        <Navbar />
      </AppBar>
      <Outlet />
    </div>
  )
}

export default Index