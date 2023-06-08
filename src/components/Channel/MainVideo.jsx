import { Box, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../../data'

const MainVideo = ({id}) => {
    console.log(id);
    const [video, setVideo] = useState(null)
    
    useEffect (() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setVideo(data.items[0]))
    }, [id])
    
    console.log(video)
    if(video===null) return "Loading...";

        return (
        <Box p={"0.5em 0 2em 3em"}>
            <Stack direction={'row'} p={"0 2em"} gap={2}>
                <div style={{width:'424px', height:'238px', backgroundColor:'#f1f1f1'}}></div>
                <Box>
                    <Typography fontWeight={'bold'}>
                        {video?.snippet?.title}
                    </Typography>
                    <Typography>
                        {parseInt(video?.statistics?.viewCount)}
                    </Typography>
                </Box>
            </Stack>
            <Divider/>
        </Box>
        
    )
}

export default MainVideo