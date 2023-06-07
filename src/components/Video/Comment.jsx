import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../../data'

const Comment = () => {
    const [comments, setComments] = useState('')

    const {id} = useParams()
  
    useEffect (() => {
        fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
        .then((data) => setComments(data.items)) 
    }, [id])


    return (

        <Box>
            {comments ? comments.map((comment, index) => {
                // console.log("MYCO",comment)
                <Box key={index}>
                    comment
                </Box>
            }): "loading.."
            }
        </Box>
    )
}

export default Comment