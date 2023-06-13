import React from 'react'
import SearchBar from './SearchBar'
import {Box} from '@mui/material'

const XsSearchHeader = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'}>
      {/* <Button onClick={() => setXsSearch(false)} sx={{height: '54.2px', width: '25%'}}/> */}
      <SearchBar/>
    </Box>
  )
}

export default XsSearchHeader