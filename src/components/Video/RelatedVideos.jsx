import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card, CardMedia, Stack, Avatar } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const RelatedVideo = ({video: {id: {videoId}, snippet}}) => {

  const linkStyle = {
    textDecoration: 'none'
  };
  
  return (
    <Stack gap={2} direction={{ xs: 'column', lg: 'row' }} p={'0.5em'}>
        <Card sx={{ boxShadow: 'none',  minWidth: { xs: '100%', md: "358px" }, boxSizing:'border-box'}}>
            <Link to = {videoId && `/video/${videoId}`}>
                <CardMedia image = {snippet?.thumbnails?.high?.url}
                           alt = {snippet?.title} 
                           sx = {{maxWidth: 358,width: '100%', height: 180, border:'solid 1px #fff', borderRadius: '10px'}} />            
            </Link>
        </Card>
        <Stack>
            {/* title */}
            <Link to = {videoId && `/video/${videoId}`} style={linkStyle}>
                <Typography variant='subtitle' color={'#000'}>
                    {snippet?.title}
                </Typography>
            </Link>
            {/* channel profile pic and title */}
            <Link to = {snippet?.channelId && `/channel/${snippet?.channelId}`} style={linkStyle}>
                <Stack direction={'row'} alignItems={'baseline'} gap={1} mb={'1em'}>
                    <Avatar alt={snippet?.channelTitle.slice(0,2)} src="/static/images/avatar/1.jpg" sx={{ width: 24, height: 24, fontSize: '0.7rem' }}/>
                        <Typography variant='subtitle2' color='gray'paddingTop={1} >
                            {snippet?.channelTitle}
                            <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
                        </Typography>
                </Stack>
            </Link>
            
            
        </Stack>
    </Stack>
  )
}

export default RelatedVideo