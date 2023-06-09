import React, { useEffect, useState } from 'react'
import { Box, Divider, Skeleton, Stack, Typography, Button} from '@mui/material'
import Player from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../data'
import { CheckCircle} from '@mui/icons-material'
import RelatedVideo from './RelatedVideos'
import Comment from './Comment'
import Like from './Like'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const TypoStyle = {
  overflow: "hidden",
  textOverflow: 'ellipsis',
  fontSize: '14px'
};

const Video = () => {
  const [video, setVideo] = useState('')
  const [videos, setVideos] = useState('')

  const {id} = useParams()
  
  useEffect (() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideo(data.items[0]))
    
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  }, [id])

  if(!video?.snippet) return <Skeleton
  sx={{ bgcolor: 'grey.900', m: '2.5em', maxWidth: '640px', boxSizing: 'border-box'}}
  variant="rectangular"
  width={'100%'}
  height={360}
/>;

  const { snippet: { title, publishedAt, channelId, channelTitle, description }, statistics: { viewCount, likeCount, commentCount } } = video;
  const date = `${monthNames[parseInt(publishedAt.slice(5,7))]} ${publishedAt.slice(8,10)}, ${publishedAt.slice(0,4)}`;

  return (
    <Box m={5}>
      <Stack direction={{ xs: "column", md: "row" }} gap={15}>
        <Box flex={1}>
          <Box sx={{ width: "100%" }}>

            {/* video player */}
            <Player url={`https://www.youtube.com/watch?v=${id}`} controls style={{maxWidth:'100%'}}/>

            {/* video title */}
            <Typography variant='h6' m={'1em 0'}>
              {title}
            </Typography>

            {/* video views and date */}
            <Stack direction='row' justifyContent={'space-between'} m={'1em 0'} alignItems={'center'}>
              <Typography>
                {`${parseInt(viewCount).toLocaleString()} Views • ${date}`}
              </Typography>
              
              {/* like */}
              <Like likeCount={likeCount}/>
              
            </Stack>

            <Divider style={{margin:'1em 0'}}/>
            
            {/* CHANNEL: */}
            <Link to={`/channel/${channelId}`} style={{textDecoration: 'none'}}>
              {/* channel name */}
              <Typography variant={'h6'}  color="#000">
                {channelTitle}
                <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
              </Typography>
            </Link>

            {/* channel description */}
            <Typography m={'1em 0'} sx={TypoStyle}>
              {description}
            </Typography>

            {/* COMMENTS */}
            <Divider style={{margin:'1em 0'}}/>
            <Box>
              {/* comments count */}
              <Typography fontWeight={'500'}>
                {`${parseInt(commentCount).toLocaleString()} Comments`}
              </Typography>
              {/* comment body */}
              <Comment/>
            </Box>
          </Box>
        </Box>

        {/* List of related videos */}
        <Stack direction="column" flexWrap="wrap" gap={2}>
          <Stack direction='row' pl={'1.5em'}>
          <Button size="small" variant="contained" disabled="true" style={{ backgroundColor: '#e6e6fa',borderRadius:'20px', color:'#696969'}}>All</Button>  
          </Stack>
          {videos ? 
          videos.map((item, index) => (
            <Box key={index}>
              {item.id.videoId && <RelatedVideo video={item} notInChannel={true} />}
            </Box>
              
          )) :
          <Skeleton/>
          }
        </Stack>
      </Stack>
    </Box>
  )
}

export default Video