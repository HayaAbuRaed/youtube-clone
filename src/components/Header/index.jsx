import * as React from 'react';
import {Box, AppBar, Toolbar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useContext } from 'react';
import ListDrawer from './ListDrawer';
import DefaultHeader from './DefaultHeader';
import XsSearchHeader from './XsSearchHeader';
import { XsSearchContext } from '../Context/XsSearchProvider';

const Header = () => {
  
  const [opened, setOpened] = useState(false);

  const {xsSearch} = useContext(XsSearchContext)

  const toggleDrawer = (open) => {
    setOpened(open);
  };
  
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: '#fff', color:'#000', boxShadow:'none', borderBottom: '#E1E1E1 solid 1.5px',  minHeight:'55px'}} >
        <Toolbar variant="dense">
          <ListDrawer state={opened} toggleDrawer={toggleDrawer}/>
          <IconButton edge="start" aria-label="menu" onClick={() => {toggleDrawer(true)}}>
            <MenuIcon />
          </IconButton>

          {xsSearch ? <XsSearchHeader/> : <DefaultHeader/>}
          
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header