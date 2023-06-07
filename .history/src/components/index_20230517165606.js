import {HomeIcon, HomeOutlinedIcon} from '@mui/icons-material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsIcon from '@mui/icons-material/SubscriptionsOutlined';

export {default as Layout} from'../Pages/Layout'
export {default as Home} from'../Pages/Home'
export {default as Video} from'../Pages/Video'
export {default as Channel} from'../Pages/Channel'
export {default as AfterSearch} from'../Pages/AfterSearch'

export const sidebar =[
    {
        txt: 'Home',
        icon: <HomeOutlinedIcon/>,
        selectedIcon: <HomeIcon/>
    },
    {
        txt: 'Explore',
        icon: <ExploreIcon/>,
        selectedIcon: <HomeIcon/>
    },
    {
        txt: 'Subscriptions',
        icon: <SubscriptionsIcon/>,
        selectedIcon: <HomeIcon/>
    },
]