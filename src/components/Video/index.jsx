import React, { useEffect, useState } from 'react'
import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material'
import Player from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../data'
import Like from '@mui/icons-material/ThumbUpOutlined';
import { CheckCircle} from '@mui/icons-material'
import RelatedVideo from './RelatedVideos'
import Comment from './Comment'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

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

  if(!video?.snippet) return "Loading...";

  const { snippet: { title, publishedAt, channelId, channelTitle, description }, statistics: { viewCount, likeCount, commentCount } } = video;
  const date = `${monthNames[parseInt(publishedAt.slice(5,7))]} ${publishedAt.slice(8,10)}, ${publishedAt.slice(0,4)}`;

  return (
    <Box m={5}>
      <Stack direction={{ xs: "column", md: "row" }} gap={5}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <Player url={`https://www.youtube.com/watch?v=${id}`} controls/>
            <Typography variant='h6' m={'1em 0'}>
              {title}
            </Typography>

            <Stack direction='row' justifyContent={'space-between'} m={'1em 0'}>
              <Typography>
                {`${parseInt(viewCount).toLocaleString()} Views • ${date}`}
              </Typography>

              <Stack direction='row' gap={1} pr={2}>
                <Like/> {parseInt(likeCount).toLocaleString()}
              </Stack>
            </Stack>

            <Divider style={{margin:'1em 0'}}/>
            
            <Link to={`/channel/${channelId}`} >
              <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#000">
                {channelTitle}
                <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
              </Typography>
            </Link>

            <Typography m={'1em 0'}>
              {description}
            </Typography>

          </Box>

          <Divider style={{margin:'1em 0'}}/>
          <Box>
            <Typography fontWeight={'500'}>
              {`${parseInt(commentCount).toLocaleString()} Comments`}
            </Typography>
            <Comment/>
          </Box>
        </Box>

        <Stack direction="column" flexWrap="wrap" justifyContent="CENTER" gap={2}>
          <Stack direction='row' pl={'1.5em'}>
            <button style={{borderRadius:'50px', width: '50px', borderColor:'#fff'}}>All</button>  
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