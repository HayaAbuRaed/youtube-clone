import React from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import './master.css'
import InfoBar from './InfoBar'
import Tabs from './Tabs'

const Channel = () => {
  
  const {id} = useParams();

  return (
    <Box>
      
      <Box className='cover' mt={'-6.5em'}></Box>

      <InfoBar id={id}/>

      <Tabs id={id} />

    </Box>
  )
}

export default Channel