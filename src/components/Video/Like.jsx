import React, {useState} from 'react'
import {Stack, IconButton, Typography, Box} from '@mui/material'
import NotLikedIcon from '@mui/icons-material/ThumbUpOutlined';
import LikedIcon from '@mui/icons-material/ThumbUp';

const Like = ({likeCount}) => {

    const [likes, setLikes] = useState(likeCount)
    const [likeButtonIsClicked, setLikeButtonIsClicked] = useState(false)
    const [likeIcon, setLikeIcon] = useState(<NotLikedIcon/>);

    const handleLikeButtonClick = () =>{

        setLikeButtonIsClicked(!likeButtonIsClicked)

        if(!likeButtonIsClicked){
          setLikes(parseInt(likes) + 1)
          setLikeIcon(<LikedIcon sx={{color: "#0E22E9", opacity:'0.8'}}/>)
        } else {
            setLikes(parseInt(likes) - 1)
            setLikeIcon(<NotLikedIcon/>)
        }
        
      }

    return (
        
        <Stack direction='row' gap={1} pr={likes && 2} alignItems={'center'} border={'1px gray solid'} borderRadius={'20px'} 
        sx={{backgroundColor: '#f1f1f1', '&:hover': {backgroundColor: 'lightgray'}}} height={'30px'}>

            <Box display={'flex'} borderRight={likes > 0 && '1px gray solid'} height={'30px'} alignItems={'top'} p='0'>
                <IconButton onClick={handleLikeButtonClick}>
                {likeIcon}
            </IconButton>
            </Box> 
           { likes > 0 && <Typography> {parseInt(likes).toLocaleString()} </Typography>}
            
        </Stack>

    )
}

export default Like