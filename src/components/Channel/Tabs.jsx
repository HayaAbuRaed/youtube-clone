import * as React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SearchIcon from '@mui/icons-material/Search';
import HomeLab from './HomeLab';
import VideoLab from './VideoLab';

const Tabs = ({videos}) => {
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const search = <SearchIcon/>
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }} >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}  p={"0em 12vw"}>
            <TabList onChange={handleChange} aria-label="video page lab">
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
          <TabPanel value="home"> <HomeLab videos = {videos}/> </TabPanel>
          <TabPanel value="videos"><VideoLab videos={videos}/></TabPanel>
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