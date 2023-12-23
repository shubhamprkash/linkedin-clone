import React from 'react';
import './Header.css';

// icons for the UI
import HeaderOption from '../headerOption/HeaderOption.js';
import linkedinIcon from '../../assets/linkedinLogo.svg';

import SearchIcon from '@mui/icons-material/Search';

import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import profileImg from '../../assets/profile.png';

import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase.js';
import { logout, selectUser } from '../../features/userSlice.js';


function Header() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    // logout functionality
    dispatch(logout());
    auth.signOut();

  };

  return (
    <div className='header'>
        <div className="header_left">
            
            <img src={linkedinIcon} alt="linkedinicon" />
            
            <div className="header_search">
                <SearchIcon />
                <input type="text" placeholder='Search' />

            </div>

        </div>


        <div className="header_right">
            <HeaderOption Icon ={HomeIcon} title="Home" />
            <HeaderOption Icon={GroupIcon} title='My Network'></HeaderOption>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'></HeaderOption>
            <HeaderOption Icon={ChatIcon} title='Messaging'></HeaderOption>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'></HeaderOption>
            <HeaderOption 
              avatar={user ? user.profileUrl : true} 
              title='Me'
              onClick={logoutOfApp}
            />



        </div>
        
    </div>

  );
}


export default Header;