import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const ListItems = ({item:{txt, icon, selectedIcon}, selectedCategory, setSelectedCategory, toggleDrawer}) => {
  return (
    <ListItem key={txt} disablePadding sx={{backgroundColor : (txt === selectedCategory) && '#F1F1F1', borderRadius: 10}}>
        <ListItemButton onClick={() => {setSelectedCategory(txt, toggleDrawer(false))} }>
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
export default ListItems