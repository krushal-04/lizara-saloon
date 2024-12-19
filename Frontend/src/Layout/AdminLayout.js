import React from 'react'
import { Outlet } from 'react-router'
import { AppBar } from '@mui/material'

import ResponsiveAppBar from '../AdminComponent/AdminNavbar'


const Admin = () => {
  return (
    <div>
       
     
      <Outlet />
      

    </div>
  )
}

export default Admin
