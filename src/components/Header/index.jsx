import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../../assets/logoHalf.png';
import { useState } from 'react';
import IconsNav from './IconsNav';
import SearchBar from './SearchBar';
import ListDrawer from './ListDrawer';
import Feed from '../Feed';

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')

  const [opened, setOpened] = useState(false);

  const toggleDrawer = (open) => {
    setOpened(open);
  };

  console.log(opened)
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#fff', color:'#000', boxShadow:'none', borderBottom: '#f1f1f1 solid 1px'}}>
        <Toolbar variant="dense">
          <ListDrawer state={opened} toggleDrawer={toggleDrawer}/>
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }} onClick={() => {toggleDrawer(true); console.log("hi")}}>
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{textDecoration:'none', color:'#000'}} onClick={() => setSelectedCategory('Home')}>
            <Stack direction={'row'} sx={{ marginRight: { xs: 1, sm: 0} }} padding={1}>
              <Typography
              variant="h6"
              noWrap
              component="div"
              >
                Vibe
              </Typography>
              <img src={logo} alt="tube" style={{maxWidth: 40}}/>
            </Stack>
          </Link>
          <Box sx={{ flexGrow: 1 }} />

          {/* Searchbar */}
          <SearchBar/>
          <Box sx={{ flexGrow: 1 }} />
          <IconsNav/>
        </Toolbar>
      </AppBar>
      <Feed ></Feed>
    </Box>
  );
}

export default Header