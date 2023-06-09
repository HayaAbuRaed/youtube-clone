import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../../data'
import Player from 'react-player'
import { Link } from 'react-router-dom';

const brief = {
    maxHeight:'48%',
    overflow: "hidden",
    textOverflow: 'ellipsis',
    mb: '10px',
    maxWidth:'700px'
};
const linkStyle = {
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1.2rem',
    color: '#000'
};

const MainVideo = ({id}) => {
    console.log(id);
    const [video, setVideo] = useState(null)
    
    useEffect (() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setVideo(data.items[0]))
    }, [id])
 
    if(video===null) return <Skeleton variant="rectangular" width={640} height={360} style={{margin:'0 0 2em 5em' }}/>;

    const {statistics: {viewCount}, snippet:{description}} = video

        return (
        <Box p={"0.5em 0 2em 3em"} >
            <Stack direction={'row'} p={"0 2em"} gap={3.5} maxHeight={'360px'}>
                <Box>
                    <Player url={`https://www.youtube.com/watch?v=${id}`} controls />
                </Box>
                <Box>
                    <Typography fontWeight={'bold'} fontSize={'1.5rem'}>
                        {video?.snippet?.title}
                    </Typography>

                    <Typography p={'1.2em 0'}>
                        {`${parseInt(viewCount).toLocaleString()} Views`}
                    </Typography>

                    <Typography sx={brief}>
                        {description}
                    </Typography>

                    <Link to = {id && `/video/${id}`} style={linkStyle}>
                        Read More
                    </Link>
                </Box>
            </Stack>
            <Divider sx={{mt:3.5}}/>
        </Box>
        
    )
}

export default MainVideo