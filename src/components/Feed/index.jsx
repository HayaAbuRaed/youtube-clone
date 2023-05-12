import React from 'react'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../data'

const Feed = () => {
  useEffect(()=>{
    fetchFromAPI
  },[])
  return (
    <div>Feed</div>
  )
}

export default Feed