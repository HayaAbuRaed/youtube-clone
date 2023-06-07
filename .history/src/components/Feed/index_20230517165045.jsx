import React from 'react'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../data'

const Feed = () => {

  useEffect(()=>{
    fetchFromAPI('search?part=snippet&q=${selectedCatigory}')
  },[])

  return (
    <Box>Feed</Box>
  )
}

export default Feed