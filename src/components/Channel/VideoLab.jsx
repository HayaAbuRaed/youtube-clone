import { Box, Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../../data'
import LabFeed from './LabFeed'

const VideoLab = ({id}) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))  
  },[id])

  return (
    <Box>
      <Button size="small" variant="contained" disabled="true" 
      style={{ backgroundColor: '#e6e6fa',borderRadius:'20px', color:'#696969', margin:'0 0 1.1em 5.7em'}}>
        Latest
      </Button>
      <Stack direction={'row'}>
          <LabFeed videos={videos}/>
      </Stack>
    </Box>
  )
}

export default VideoLab