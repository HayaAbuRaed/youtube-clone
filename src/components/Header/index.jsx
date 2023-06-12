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
import SignIn from './SignIn' 
import { useContext } from 'react';
import { CategoryContext } from '../Context/CategoryProvider';
import { UserAuth } from '../Context/AuthProvider';

const Header = () => {
  
  const [opened, setOpened] = useState(false);
  
  const {setSelectedCategory} = useContext(CategoryContext)

  const {user} = UserAuth()

  const toggleDrawer = (open) => {
    setOpened(open);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: '#fff', color:'#000', boxShadow:'none', borderBottom: '#f1f1f1 solid 1px',  minHeight:'55px'}} >
        <Toolbar variant="dense">
          <ListDrawer state={opened} toggleDrawer={toggleDrawer}/>
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }} onClick={() => {toggleDrawer(true)}}>
            <MenuIcon />
          </IconButton>
          {/* logo */}
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

          {/* Nav */}

          <Box sx={{display: {xs: 'none', sm: 'flex'}}}>
            {user?.displayName ? <IconsNav/> : <SignIn/>}
          </Box>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header