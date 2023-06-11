import * as React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SearchIcon from '@mui/icons-material/Search';
import HomeLab from './HomeLab';
import VideoLab from './VideoLab';
import { useState} from 'react';

const Tabs = ({id}) => {
    const [value, setValue] = useState('home');
    

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const search = <SearchIcon/>
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}  m={{xs:"0", md:"0 3em 0 5.71em "}}>
            <TabList onChange={handleChange} aria-label="channel page labs" >
              {/* {tabs.map((e)=> <Tab label={e} value={e} />)} */}
              <Tab label="HOME" value="home" />
              <Tab label="VIDEOS" value="videos" />
              <Tab label="LIVE" value="live" />
              <Tab label="PLAYLIST" value="playlist" />
              <Tab label="COMMUNITY" value="community" />
              <Tab label="CHANNELS" value="channels" />
              <Tab label="ABOUT" value="about" />
              <Tab label={search} value="search" />
            </TabList>
          </Box>
          <TabPanel value="home"> <HomeLab id = {id}/> </TabPanel>
          <TabPanel value="videos"><VideoLab id={id}/></TabPanel>
          <TabPanel value="live">live</TabPanel>
          <TabPanel value="playlist">playlist</TabPanel>
          <TabPanel value="community">community</TabPanel>
          <TabPanel value="channels">channels</TabPanel>
          <TabPanel value="about">about</TabPanel>
          <TabPanel value="search">results</TabPanel>
        </TabContext>
      </Box>
    );
}

export default Tabs