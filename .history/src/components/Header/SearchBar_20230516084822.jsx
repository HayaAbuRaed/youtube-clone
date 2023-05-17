import React from 'react'
import InputBase from '@mui/material/InputBase';
import {alpha, styled} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

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

const SearchBar = () => {
    const [screenSize, setScreenSize] = React.useState('xs');

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
    <div>
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
  </div>
  )
}

export default SearchBar