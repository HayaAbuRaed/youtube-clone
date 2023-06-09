import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card, CardMedia, Stack, Avatar } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ResultVideo = ({video: {id: {videoId}, snippet}}) => {
  
  console.log(snippet)

  const linkStyle = {
    textDecoration: 'none'
  };

  const TypoStyle = {
    color: '#000',
    fontSize:'1.3rem',
    width: {xs:'240px', sm:'500px', md: '420px', lg:'100%'},
    overflow: "hidden",
    textOverflow: 'ellipsis',
  };
  
  return (
    <Stack gap={2} direction={{ xs: 'column', md: 'row' }} p={'0 1.75em 2em 0'} width={'100%'}>
        <Card sx={{ boxShadow: 'none',  minWidth: { xs: '100%', md: "358px" }, boxSizing:'border-box'}}>
            <Link to = {videoId && `/video/${videoId}`}>
                <CardMedia image = {snippet?.thumbnails?.high?.url}
                           alt = {snippet?.title} 
                           sx = {{width: {xs: '100%', md: "358px"} , height: 180, border:'solid 1px #fff', borderRadius: '10px'}} />            
            </Link>
        </Card>
        <Stack>
            {/* title */}
            <Link to = {videoId && `/video/${videoId}`} style={linkStyle}>
                <Typography variant='subtitle1' sx={TypoStyle}>
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
            {/* description */}
            <Typography variant='subtitle1' sx={TypoStyle} >
                {snippet?.description}
            </Typography>
            
        </Stack>
    </Stack>
  )
}

export default ResultVideo