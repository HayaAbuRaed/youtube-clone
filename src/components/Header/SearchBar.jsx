import React from 'react'
import InputBase from '@mui/material/InputBase';
import {styled} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, Paper } from '@mui/material';
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const search = {
    position: 'relative',
    borderRadius: '100px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginRight: '20px',
    marginLeft: 1,
    border: '#909090 1px solid',
  };
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = {
    color: 'inherit',
    paddingLeft: `calc(1em + 40px)`,
    width: '100%',
  };

const SearchBar = () => {
    const [screenSize, setScreenSize] = useState('xs');
    const [searchResult, setSearchResult] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      if (searchResult) {
        navigate(`/search/${searchResult}`);

        setSearchResult('');
      }
    };

    useEffect(() => {
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
    <Box>
        { (screenSize === 'xs') ?
        <Box display={'flex'} width={'100%'}>
            <Box sx={{ flexGrow: 1 }}/>  
            <SearchIcon /> 
        </Box> 
        :
        <Box>
            <Paper sx={search} component='form' onSubmit={handleSubmit}>
                <SearchIconWrapper>
                <IconButton type='submit' sx={{ p: '10px', color: 'f1f1f1' }} aria-label='search'>
                  <SearchIcon />
                </IconButton>
                </SearchIconWrapper>
                <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                style={StyledInputBase}
                value={searchResult}
                onSubmit={handleSubmit}
                onChange={(e) => setSearchResult(e.target.value)}
                />
            </Paper>
            {/* <Box sx={{ flexGrow: 1 }} /> */}
        </Box>
    }
  </Box>
  )
}

export default SearchBar

