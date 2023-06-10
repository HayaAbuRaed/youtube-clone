import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,CardContent, CardMedia, Box} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelCard = ({channel}) => {

    const linkStyle = {
      textDecoration: 'none',
    };

    return (
    <Box
      sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      
      width: { xs: '100%', md: '358px' },
      height: '326px',
      margin: 'auto',
      }}
    >

      <Link to={`/channel/${channel?.id?.channelId}`} style={linkStyle}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', color: '#000', alignItems:'center' }}>
          <CardMedia
            image={channel?.snippet?.thumbnails?.high?.url}
            alt={channel?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          <Typography variant="h6">
            {`${channel?.snippet?.title} `}
            <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
          </Typography>
          
        </CardContent>
      </Link>
    </Box>
    )
}

export default ChannelCard