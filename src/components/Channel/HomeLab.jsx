import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import MainVideo from './MainVideo'
import { useState } from 'react'
import { fetchFromAPI } from '../../data'
import LabFeed from './LabFeed'

const HomeLab = ({id}) => {
  const [videos, setVideos] = useState(null)
   
  useEffect(() => {
    fetchFromAPI(`search?channelId=${id}&part=snippet`).then((data)=>setVideos(data?.items))  
  },[id])

  if(videos===null){
    return (
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <CircularProgress color="inherit" /> <Typography ml={'10px'}> Loading... </Typography> 
      </Box>
    );
  }
  
  return (
    <Box>
        <MainVideo id={videos[0]?.id.videoId}/>
        <LabFeed videos={videos}/>
    </Box>
  )
}

export default HomeLab