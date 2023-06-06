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

const drawerWidth = 240;
const selectedCategory = 'Home'

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const Header= ({component}) => {
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
          <Link to="/" style={{textDecoration:'none', color:'#000'}}>
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
          {sidebar.map(({txt, icon, selected}, index) => (
            <ListItem key={txt} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  { === selectedCategory ? selected : icon}
                </ListItemIcon>
                <ListItemText primary={txt} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {categories.map(({txt, icon, selected} ) => (
            <ListItem key={txt} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {txt === selectedCategory ? selected : icon}
                </ListItemIcon>
                <ListItemText primary={txt} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
            
      {/* main area */}
      <Main open={open}>
        <DrawerHeader />
        {component}
      </Main>      
    </Box>
  );
}
export default Header;
