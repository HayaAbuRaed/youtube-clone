import React from 'react'
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar, Stack, Tooltip , Typography, menu } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Video from '@mui/icons-material/VideoCallOutlined';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const IconsNav = () => {
  return (
    <Stack direction={'row'}>
            <IconButton
              size="large"
              aria-label="show notifications"
              color="inherit"
              sx={{padding: {xs: 0.5, sm:1.5}}}
            > 
              <Video />
            </IconButton>

            <IconButton
              size="large"
              aria-label="show notifications"
              color="inherit"
              sx={{padding: {xs: 0.5, sm:1.5}}}
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          
            <Box sx={{ flexGrow: 0 }} display={'flex'} alignItems={'center'} padding={1}>
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
            
          </Stack>
  )
}

export default IconsNav