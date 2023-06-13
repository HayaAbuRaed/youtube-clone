import React, {useState} from 'react'
import {Button} from '@mui/material'
import NotificationNotClicked from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsClicked from '@mui/icons-material/Notifications';

const Subscribe = ({subscriberCount}) => {
    const [subscribers, setSubscribers] = useState(subscriberCount)
    const [subButtonIsClicked, setSubButtonIsClicked] = useState(false)
    const [subIcon, setSubIcon] = useState(<NotificationNotClicked/>);

    const handleLikeButtonClick = () =>{
        setSubButtonIsClicked(!subButtonIsClicked)

        if(!subButtonIsClicked){
            setSubscribers(parseInt(subscribers) + 1)
            setSubIcon(<NotificationsClicked/>)
        } else {
            setSubscribers(parseInt(subscribers) - 1)
            setSubIcon(<NotificationNotClicked/>)
        }  
    }

    return (
        <Button variant="contained" startIcon={subIcon} onClick={handleLikeButtonClick} disableRipple
            sx={{backgroundColor: '#f1f1f1', '&:active': {
                backgroundColor: '#f1f1f1',
              },'&:focus': {
                backgroundColor: '#f1f1f1',
              }, color: 'black', borderRadius: '50px', maxWidth: '130px', margin:{xs: '1em 0', md:'0'}}} >
              {subButtonIsClicked ? 'Subscribed' : 'Subscribe'}
        </Button>
    )
}

export default Subscribe