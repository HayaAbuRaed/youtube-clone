import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({video}) => {
  return (
    <div>
        <Card>
            <Link>
                <CardMedia image=''/>
            </Link>
        </Card>
    </div>
  )
}

export default VideoCard