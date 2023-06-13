import { Divider, Drawer, List } from '@mui/material'
import React, { useContext} from 'react'
import DrawerItem from './DrawerItem'
import { sidebar, categories } from '..';
import { CategoryContext } from '../Context/CategoryProvider';

const ListDrawer = ({state, toggleDrawer}) => {
  
  const {selectedCategory, setSelectedCategory} = useContext(CategoryContext)

  return (
      <Drawer
        open={state}
        onClose={() => toggleDrawer(false)}
      >
        <List>
        {sidebar.map((item) => (
          <DrawerItem key={item.txt} item = {item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} toggleDrawer={toggleDrawer}/>
        ))}
      </List>

      <Divider />
      <List>
        {categories.map((category) => (
          <DrawerItem key={category.txt} item = {category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} toggleDrawer={toggleDrawer}/>
        ))}
      </List>
    </Drawer>
  )  
}

export default ListDrawer