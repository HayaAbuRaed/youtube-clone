import React from 'react'
import {styled} from '@mui/material/styles';
import {DrawerHeader} from './index'

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${240}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

const MainArea = ( component={component}) => {
  return (
    <div>
        <Main open={open}>
            <DrawerHeader />
            {component}
        </Main>    
    </div>
  )
}

export default MainArea