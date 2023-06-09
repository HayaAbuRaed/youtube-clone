import React from 'react'
import {styled} from '@mui/material/styles';
import {DrawerHeader} from './index'
import Feed from '../Feed';
import Channel from '../Channel';
import AfterSearch from '../AfterSearch';
import Video from '../Video';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      // padding: theme.spacing(3),
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

const MainArea = ({component, open, videos}) => {
  return (
    <Main open={open}>
        <DrawerHeader />
        {/* {component} */}
        {/* <Feed videos = {videos} notInChannel={true}/> */}
        <Channel/>
        {/* <AfterSearch/> */}
        {/* <Video/> */}
      </Main>
  )
}

export default MainArea