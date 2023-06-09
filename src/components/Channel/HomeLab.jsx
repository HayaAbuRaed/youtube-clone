import { Box, CircularProgress, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Feed from '../Feed'
import MainVideo from './MainVideo'
import { useState } from 'react'
import { fetchFromAPI } from '../../data'

const HomeLab = ({id}) => {
  const [videos, setVideos] = useState(null)
  
  // console.log(videos)
   
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
  
  console.log(videos);
  return (
    <div>
        <MainVideo id={videos[0]?.id.videoId}/>
        <Stack direction={'row'}>
            <Feed videos={videos}/>
        </Stack>
    </div>
  )
}

export default HomeLab