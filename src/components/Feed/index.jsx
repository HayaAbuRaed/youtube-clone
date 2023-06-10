import React, { useContext, useEffect, useState } from 'react'
import { Box , Stack} from '@mui/material'
import VideoCard from '../VideoCard'
import ChannelCard from '../ChannelCard'
import { fetchFromAPI } from '../../data'
import { CategoryContext } from '../Context/CategoryProvider'

const Feed = ({id, notInChannel}) => {
  const [videos, setVideos] = useState([]);

  const {selectedCategory} = useContext(CategoryContext)
  

  useEffect(()=>{
    let category = selectedCategory
    if(category === "Home") category = "new"
    else if(category === "Explore") category = "trending"
    fetchFromAPI(`search?part=snippet&q=${category}`).then(data => setVideos(data.items))
  },[selectedCategory])

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="CENTER" gap={2}>
      {
      videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} notInChannel={notInChannel}/>}
          {item.id.channelId && <ChannelCard channel={item}/>}
        </Box>
      ))
      } 

    </Stack>
  )
}

export default Feed