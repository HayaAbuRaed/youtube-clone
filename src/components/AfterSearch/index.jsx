import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChannelCard from '../../components/ChannelCard'
import { fetchFromAPI } from '../../data'
import { useParams } from 'react-router-dom'
import ResultVideo from './AfterSearchVideo'

const AfterSearch = () => {
  const [videos, setVideos] = useState([]);

  const {searchResult} = useParams();
  
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchResult}`).then(data => setVideos(data.items))
  },[searchResult])

  return (
    <Box p={'0 3em'}>
      {searchResult &&
      <Typography variant= 'h5' p ={"1.5em 0.2em"} fontWeight={'600'}>
        Search Results for <span style={{color:'#F31503', fontStyle: 'italic'}}>{searchResult}</span>  Videos
      </Typography>}
      
      <Stack direction="column" flexWrap="wrap" justifyContent="CENTER" gap={2}>
        {
        videos.map((item, index) => (
          <Box key={index}>
            {item.id.videoId && <ResultVideo video={item} notInChannel={true} />}
            {item.id.channelId && <ChannelCard channel={item}/>}
          </Box>
        ))
        } 

      </Stack>
    </Box>
    
  )
}

export default AfterSearch