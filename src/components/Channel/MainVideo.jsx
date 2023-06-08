import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import VideoCard from '../VideoCard'

const MainVideo = ({mainVideo}) => {
    // console.log(mainVideo)
  return (
    <Box p={"0.5em 0 2em 3em"}>
        <Stack direction={'row'} p={"0 0 2em 7vw"} gap={2}>
            <div style={{width:'424px', height:'238px', backgroundColor:'#f1f1f1'}}></div>
            <Box>
                <Typography fontWeight={'bold'}>
                    {mainVideo?.snippet?.title}
                </Typography>
                <Typography>
                    {parseInt(mainVideo?.statistics?.viewCount)}
                </Typography>
            </Box>
        </Stack>
        <Divider/>
    </Box>
    
  )
}

export default MainVideo