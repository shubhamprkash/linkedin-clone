import React from 'react';
import './Header.css';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import linkedinIcon from './icon-linkedin-480.svg';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div>
        <h1>This is a header</h1>
        <div className="header_left">

        </div>

        <div className="header_right">
            <img src={linkedinIcon} alt="linkedinicon" />
            {/* <LinkedInIcon/> */}
            <div className="header_search">
                <SearchIcon />
                <input type="text" />

            </div>
        </div>
        
    </div>

  )
}

{ /*
    const firebaseConfig = {
    apiKey: "AIzaSyBH2cEZxqTvZj2BODe9Rp-pYGhbr81r6r4",
    authDomain: "linkedin-clone-fdfb7.firebaseapp.com",
    projectId: "linkedin-clone-fdfb7",
    storageBucket: "linkedin-clone-fdfb7.appspot.com",
    messagingSenderId: "982428713660",
    appId: "1:982428713660:web:cf8f638a93362e8df9c6b9"
    };                

*/ }


export default Header;