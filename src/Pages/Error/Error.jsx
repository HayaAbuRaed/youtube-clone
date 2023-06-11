import React from 'react'
import {Stack, Typography} from '@mui/material'

const Error = () => {
  return (
    <Stack direction={'column'} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} > 
        <img src="https://www.youtube.com/img/desktop/unavailable/unavailable_video.png" alt="404" width={'50%'} style={{maxWidth: '640px'}}/>
        <Typography variant='h4' ml={3}> Error <span color='red'>404</span> page not found </Typography> 
    </Stack>
  )
}

export default Error