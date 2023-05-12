import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <Box>
      <Header component={<Outlet/>}/>
    </Box>
  )
}

export default layout