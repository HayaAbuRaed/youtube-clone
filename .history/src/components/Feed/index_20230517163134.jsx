import React from 'react'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../data'

const Feed = () => {

  useEffect(()=>{
    fetchFromAPI('search')
  },[])

  return (
    <Box>Feed</Box>
  )
}

export default Feed