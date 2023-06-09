import { Divider, Drawer, List } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ListItems from './ListItems'
import { sidebar, categories } from '..';
import { fetchFromAPI } from '../../data';

const ListDrawer = ({state, toggleDrawer}) => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  
  useEffect(()=>{
    let category = selectedCategory;
    if(category === "Home") category = "new"
    else if(category === "Explore") category = "trending"
    fetchFromAPI(`search?part=snippet&q=${category}`).then(data => setVideos(data.items))
    },[selectedCategory])
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