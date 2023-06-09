import React from 'react'
import { Box, Stack, Typography} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from '@emotion/styled'
import './master.css'
import { fetchFromAPI } from '../../data';
import { useState, useEffect } from 'react';
import Subscribe from './Subscribe';

const StyledTypography = styled(Typography)`
  line-height: 40px
`;

const InfoBar = ({id}) => {

  const [channel, setChannel] = useState("")
   
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannel(data?.items[0])); 
  },[id])

  return (
    <Box>
      <Stack padding={'1.5em 2.09em'} sx={{flexDirection: {sm: 'column', md: 'row'}}} >
        {/* profile picture */}
        <Box>
          <img src= {`${channel.snippet?.thumbnails?.high?.url}`} alt= {`${channel.snippet?.title}`} className='channelImg'/>
        </Box>

        <Stack justifyContent={'center'} className='statistics' width={'100%'}>
          
          <Stack justifyContent={'space-between'} sx={{flexDirection: {sm: 'column', md: 'row'}}}>
            {/* title */}
            <Typography variant="h6">
              {`${channel?.snippet?.title} `}
              <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
            </Typography>

            {/* subscribe button */}
            <Subscribe subscriberCount={channel?.statistics?.subscriberCount}/>
          </Stack>
          
          {/* statistics */}
          <StyledTypography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            
            {/* username */}
            {`${channel?.snippet?.customUrl} | `}

            {/* subscribers */}
            {parseInt(channel?.statistics?.subscriberCount) > 999 ? 
            `${(channel?.statistics?.subscriberCount).substr(0, (channel?.statistics?.subscriberCount).length - 3)}k`: 
            channel?.statistics?.subscriberCount} Subscribers  

            {/* videos */}
            {` | ${channel?.statistics?.videoCount} Videos`}
            
          </StyledTypography> 

          {/* description */}
          <Typography className='description' width={{xs:'230px', sm:'650px'}}> 
            {`${channel?.snippet?.description}`}
          </Typography> 
          
        </Stack>
      </Stack>
    </Box>
  )
}

export default InfoBar