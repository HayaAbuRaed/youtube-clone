import { Divider, Drawer, List } from '@mui/material'
import React, { useContext} from 'react'
import ListItems from './ListItems'
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
              <ListItems item = {item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} toggleDrawer={toggleDrawer}/>
            ))}
          </List>

          <Divider />
          <List>
            {categories.map((category) => (
              <ListItems item = {category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} toggleDrawer={toggleDrawer}/>
            ))}
          </List>
        </Drawer>
      )
  
}

export default ListDrawer