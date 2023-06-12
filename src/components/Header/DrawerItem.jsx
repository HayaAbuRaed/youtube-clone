import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const DrawerItem = ({item:{txt, icon, selectedIcon}, selectedCategory, setSelectedCategory, toggleDrawer}) => {
  const navigate = useNavigate();

    const handleClick = () => {
      if(selectedCategory)
        navigate(`/`);
    };
  return (
    <ListItem sx={{backgroundColor : (txt === selectedCategory) && '#F1F1F1', borderRadius: 10}}>
        <ListItemButton onClick={() => {setSelectedCategory(txt, toggleDrawer(false)); handleClick()} }>
        <ListItemIcon>
            {
            txt === selectedCategory ? selectedIcon : icon
            }
        </ListItemIcon>
        <ListItemText primary={txt}/>
        </ListItemButton>
    </ListItem>
  )
}
export default DrawerItem