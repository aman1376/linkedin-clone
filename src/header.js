import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import { useDispatch} from 'react-redux';
import { logout} from './features/userSlice';
import { auth } from './firebase';
function header() {
    const dispatch=useDispatch();
    const logoutOfApp=()=>{
        dispatch(logout())
        auth.signOut()
    };
  return (
    <div className="header">
      
      <div className="header_left">
        <img src='.\linkedin.png' alt=''/>
        <div className="header_search">
            <SearchIcon/>
            <input placeholder='Search' type="text"/>
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption Avatar={true} title="me" onClick={logoutOfApp}/>
        
      </div>
    </div>
  )
}

export default header
