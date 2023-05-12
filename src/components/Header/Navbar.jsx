import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, Stack, Tooltip } from '@mui/material';

// FixME
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
//FixEnd

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '100px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 1,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  border: '#909090 1px solid',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


// *************************** COMPONENT *********************************

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [screenSize, setScreenSize] = React.useState('xs');

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 600px)');

    function handleMediaQueryChange(e) {
      if (e.matches) {
        setScreenSize('sm');
      } else {
        setScreenSize('xs');
      }
    }

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []); 

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000'}}>
        <Toolbar>
        {
        screenSize !== 'xs' &&
        <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>
        }

          {/* LOGO */}
          <Stack direction={'row'} sx={{ marginRight: { xs: 1, sm: 0} }} padding={1}>
            <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Vibe
          </Typography>
          <img src="./assets/logoHalf.png" alt="tube" style={{maxWidth: 40}}/>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          
          { (screenSize === 'xs') ?
            <Box display={'flex'} width={'100%'}>
              <Box sx={{ flexGrow: 1 }}/> 
              <SearchIcon /> 
            </Box> 
            :
            <div>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search></div>
          }

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction={'row'}>
            <IconButton
              size="large"
              aria-label="show notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/* FIXME */}
            <Box sx={{ flexGrow: 0 }} display={'flex'} alignItems={'center'}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{maxWidth: 35, maxHeight:35}}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* FIXEND */} 
          </Stack>
          
          
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}