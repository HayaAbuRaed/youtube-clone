import React from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import './master.css'
import InfoBar from './InfoBar'
import Tabs from './Tabs'

const Channel = () => {
  
  const {id} = useParams();

  return (
    <Box width={"100vw"}>
      
      <div className='cover'></div>

      <InfoBar id={id}/>

      <Tabs id={id} />

    </Box>
  )
}

export default Channel