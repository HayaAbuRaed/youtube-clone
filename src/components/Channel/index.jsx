import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchFromAPI } from '../../data'
import './master.css'
import InfoBar from './InfoBar'
import Tabs from './Tabs'

const Channel = () => {
  const [channel, setChannel] = useState("")
  const [videos, setVideos] = useState([]) 
  const {id} = useParams();
  
  // console.log(videos)
   
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannel(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet`).then((data)=>setVideos(data?.items)) 
  },[id])


  return (
    <Box>
      
      <Box className='cover' mt={'-6.5em'}></Box>

      <InfoBar channel={channel}></InfoBar>

      <Tabs videos={videos}/>

    </Box>
  )
}

export default Channel