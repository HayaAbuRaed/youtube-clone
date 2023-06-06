import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card, CardContent, CardMedia, Box, Stack, Avatar } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  console.log(snippet)
  return (
    <Box>
        <Card sx={{boxShadow: 'none',  maxWidth: { xs: '100%', md: "358px" }, boxSizing:'border-box'}}>
            <Link to = {videoId && `/video/${videoId}`}>
                <CardMedia image = {snippet?.thumbnails?.high?.url}
                           alt = {snippet?.title} 
                           sx = {{width: 358, height: 180, border:'solid 1px #fff', borderRadius: '10px'}} />            
            </Link>

            <CardContent sx={{height: 106, paddingLeft: 0}} >
              <Stack direction={'row'} gap={1}>
                <Avatar alt={snippet?.channelTitle.slice(0,2)} src="/static/images/avatar/1.jpg" /> 
                <Box>
                  <Link to = {videoId && `/video/${videoId}`} >
                    <Typography variant='subtitle1' fontWeight='bold' color='#000' >
                      {snippet?.title.slice(0,43)}
                    </Typography>
                  </Link>
                  <Link to = {snippet?.channelId && `/channel/${snippet?.channelId}`} >
                    <Typography variant='subtitle2' color='gray'paddingTop={1} >
                      {snippet?.channelTitle}
                      <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
                    </Typography>
                  </Link>
                </Box>
              </Stack>
            </CardContent>
        </Card>
    </Box>
  )
}

export default VideoCard