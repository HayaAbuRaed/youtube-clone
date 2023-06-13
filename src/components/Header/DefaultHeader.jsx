import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import { Stack, Box, Typography, IconButton } from '@mui/material';
import logo from '../../assets/logoHalf.png';
import IconsNav from './IconsNav';
import SearchBar from './SearchBar';
import SignIn from './SignIn';
import SearchIcon from '@mui/icons-material/Search'; 
import { CategoryContext } from '../Context/CategoryProvider';
import { UserAuth } from '../Context/AuthProvider';
import { XsSearchContext } from '../Context/XsSearchProvider';


const DefaultHeader = () => {

    const {setSelectedCategory} = useContext(CategoryContext)

    const {user} = UserAuth()

    const {setXsSearch} = useContext(XsSearchContext)

    return (
        <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'} width={'100%'}>
            
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
            

            {/* SearchBar */}
            <Box display = {{xs:'none', sm:'block'}}>
                <SearchBar/>
            </Box>
            
            <Box display={'flex'} width={'100%'} sx={{display:{xs:'flex', sm:'none'}}} justifyContent={'space-between'}>
                <Box sx={{ flexGrow: 1 }} /> 
                <IconButton onClick={() => {setXsSearch(true)}}>
                    <SearchIcon />
                </IconButton> 
            </Box> 

            <Box sx={{ flexGrow: 1}} />

            {/* Nav */}

            <Box sx={{display: {xs: 'none', sm: 'flex'}}}>
                {user?.displayName ? <IconsNav/> : <SignIn/>}
            </Box>
        </Stack>
    )
}

export default DefaultHeader