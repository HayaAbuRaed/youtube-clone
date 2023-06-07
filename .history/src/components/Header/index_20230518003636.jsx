import * as React from 'react';
import {styled, useTheme } from '@mui/material/styles';
import {Stack, Box, Typography} from '@mui/material';
import {Drawer, CssBaseline,Toolbar, Divider} from '@mui/material';
import {List, ListItem,ListItemButton, ListItemIcon , ListItemText} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link} from 'react-router-dom';
import logo from '../../assets/logoHalf.png'
import { sidebar, categories } from '..';
import SearchBar from './SearchBar';
import IconsNav from './IconsNav';
import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../../data';
import MainArea from './Main';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



const Header= ({component}) => {
  const [selectedCategory, setSelectedCategory] = useState('Home')
  
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data => {})
  },[selectedCategory])

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} justifyContent={'space-between'}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#fff', color: '#000'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 0, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO */}
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
          
          {/* icons nav */}
          <IconsNav/>
          

        </Toolbar>
      </AppBar>

       
      {/* sidebar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {sidebar.map(({txt, icon, selectedIcon}) => (
            <ListItem key={txt} disablePadding  sx={{backgroundColor : (txt === selectedCategory) && 'gray', borderR}}>
              <ListItemButton onClick={() => setSelectedCategory(txt)}>
                <ListItemIcon>
                  {
                    txt === selectedCategory ? selectedIcon : icon
                  }
                </ListItemIcon>
                <ListItemText primary={txt}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {categories.map(({txt, icon, selectedIcon} ) => (
            <ListItem key={txt} disablePadding>
              <ListItemButton onClick={() => setSelectedCategory(txt)}>
                <ListItemIcon>
                  {txt === selectedCategory ? selectedIcon : icon}
                </ListItemIcon>
                <ListItemText primary={txt} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <MainArea component={component} open={open}/>
    </Box>
  );
}
export default Header;
