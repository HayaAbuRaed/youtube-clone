import React, { useState } from 'react'
import { Box , Stack} from '@mui/material'
import VideoCard from '../VideoCard'
import ChannelCard from '../ChannelCard'

const Feed = ({videos, notInChannel}) => {
  // const [selectedCategory, setSelectedCategory] = useState('New')
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="CENTER" gap={2}>
      {
      videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} notInChannel={notInChannel}/>}
          {item.id.channelId && <ChannelCard channel={item}/>}
        </Box>
      ))
      } 

    </Stack>
  )
}

export default Feed