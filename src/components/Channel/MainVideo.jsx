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
    
    useEffect (() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setVideo(data.items[0]))
    }, [id])
 
    if(video===null) return (
        <Box p={"0.5em 0 2em 3em"} >
            <Skeleton variant="rectangular" width={'100%'} height={'360px'} sx={{margin:'0 0 2em 5em', maxHeight: '360px' }}/>
        </Box>
    )
    
    const {statistics: {viewCount}, snippet:{description}} = video

        return (
        <Box p={{xs:"0", md:"0.5em 0 2em 3em"}} >
            <Stack p={{xs:"0", md:"0 2em"}} gap={3.5}  sx={{flexDirection: {sm: 'column', md: 'row'}, maxHeight: {sm: '100%', md: '360px'}}}>
                <Box width='100%' maxWidth={'640px'}>
                    <Player url={`https://www.youtube.com/watch?v=${id}`} controls width={'100%'} style={{minWidth: '100px'}}/>
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