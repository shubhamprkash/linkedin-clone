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
import profileImg from '../../assets/profile.png';


function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            
            <img src={linkedinIcon} alt="linkedinicon" />
            
            <div className="header_search">
                <SearchIcon />
                <input type="text" />

            </div>

        </div>


        <div className="header_right">
            <HeaderOption Icon ={HomeIcon} title="Home" />
            <HeaderOption Icon={GroupIcon} title='My Network'></HeaderOption>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'></HeaderOption>
            <HeaderOption Icon={ChatIcon} title='Messaging'></HeaderOption>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'></HeaderOption>
            <HeaderOption avatar={profileImg} title='Me'></HeaderOption>



        </div>
        
    </div>

  );
}


export default Header;