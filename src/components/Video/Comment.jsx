import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../data'
import Like from '@mui/icons-material/ThumbUpOutlined';
import Dislike from '@mui/icons-material/ThumbDownOutlined';

const Comment = () => {
    const [comments, setComments] = useState('')

    const {id} = useParams()
  
    useEffect (() => {
        fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
        .then((data) => setComments(data.items)) 
    }, [id])

    return (

        <Stack direction={'column'}>
            {comments ? comments.map((comment, index) =>
                <Stack direction='row' key={index} p={'2em 0'} gap={2}>
                    
                    <Avatar alt={comment.snippet.topLevelComment.snippet.authorDisplayName} src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                    <Box>
                        <Typography fontWeight={'600'}>
                            {comment.snippet.topLevelComment.snippet.authorDisplayName}
                        </Typography> 
                        <Typography maxWidth={{xs:'250px', md: '312px'}} maxHeight={'168px'} overflow={'hidden'} textOverflow={'ellipsis'}>
                            {comment.snippet.topLevelComment.snippet.textOriginal}
                        </Typography> 
                        <Stack direction='row' gap={1} pt={1.5} color={'gray'}>
                            <Like/> {comment.snippet.topLevelComment.snippet.likeCount > 0 && parseInt(comment.snippet.topLevelComment.snippet.likeCount).toLocaleString()}
                            <Dislike sx={{ml: '0.7em'}}/> {comment.snippet.topLevelComment.snippet.likeCount > 0 && parseInt(comment.snippet.topLevelComment.snippet.likeCount - 1 ).toLocaleString()}
                        </Stack>
                    </Box>

                </Stack>
            ): <Skeleton animation="wave" />
            }
        </Stack>
    )
}

export default Comment