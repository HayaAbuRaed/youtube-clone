import React from 'react'
import { Box , Stack} from '@mui/material'
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../../data'
import VideoCard from '../VideoCard'
import ChannelCard from '../ChannelCard'

const Feed = ({videos}) => {
  // console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {
      videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId &&  <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channel={item}/>}
        </Box>
      ))
      } 

    </Stack>
  )
}

export default Feed