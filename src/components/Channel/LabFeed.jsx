import React from 'react'
import {Stack, Box} from '@mui/material'
import VideoCard from '../VideoCard'
import ChannelCard from '../ChannelCard'

const LabFeed = ({videos}) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="CENTER" gap={3} m={{xs:"0", md:'0 2em'}}>
        {
        videos.map((item, index) => (
        <Box key={index}>
            {item.id.videoId && <VideoCard video={item} notInChannel={false}/>}
            {item.id.channelId && <ChannelCard channel={item}/>}
        </Box>
        ))
        }
    </Stack>
  )
}

export default LabFeed