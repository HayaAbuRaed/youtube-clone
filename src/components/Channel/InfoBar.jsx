import React from 'react'
import { Box, Button, Stack, Typography} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Notification from '@mui/icons-material/NotificationsNoneOutlined';
import styled from '@emotion/styled'
import './master.css'

const StyledTypography = styled(Typography)`
  line-height: 40px
`;

const InfoBar = ({channel}) => {
  return (
    <div>
        {/* profile picture */}
      <Stack direction={'row'} padding={'1.5em 2.09em'}>
        <Box >
          <img src= {`${channel.snippet?.thumbnails?.high?.url}`} alt= {`${channel.snippet?.title}`} className='channelImg'/>
        </Box>
        <Stack justifyContent={'center'} className='statistics' width={'100%'}>
          
          <Stack direction={'row'} justifyContent={'space-between'}>
            {/* title */}
            <Typography variant="h6">
              {`${channel?.snippet?.title} `}
              <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
            </Typography>

            <Button variant="contained" startIcon={<Notification />} sx={{backgroundColor: '#f1f1f1', color: 'black', borderRadius: '50px'}}>
              Subscribe
            </Button>
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

          <Typography className='description'> 
            {/* description */}
            {`${channel?.snippet?.description}`}
          </Typography> 
          
        </Stack>
      </Stack>
    </div>
  )
}

export default InfoBar