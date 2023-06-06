import { Stack } from '@mui/material'
import React from 'react'
import Feed from '../Feed'
import MainVideo from './MainVideo'

const HomeLab = ({videos}) => {
    const mainVideo = videos[0]
  return (
    <div>
        <MainVideo mainVideo= {mainVideo}/>
        <Stack direction={'row'}>
            <Feed videos={videos}/>
        </Stack>
    </div>
  )
}

export default HomeLab