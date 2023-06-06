import { Stack } from '@mui/material'
import React from 'react'
import Feed from '../Feed'

const VideoLab = ({videos}) => {
  return (
    <Stack direction={'row'}>
        <Feed videos={videos}/>
    </Stack>
  )
}

export default VideoLab