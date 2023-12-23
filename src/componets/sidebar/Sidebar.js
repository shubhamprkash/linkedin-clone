import { Avatar } from '@mui/material';
import React from 'react'
import './Sidebar.css';

function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>

      <div className="sidebar_top">
        <img src="https://source.unsplash.com/random/?coding,city" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2 id='uname'>Username</h2>
        <h4 id='email'>examplemail@gmail.com</h4>

      </div>
      <div className="sidebar_stat">

     
      <div className="sidebar_stats">
        <p>Who viewed you</p>
        <p className="sidebar_statNumber">2,543</p>
      </div>

      <div className="sidebar_stats">
        <p>Views on post</p>
        <p className="sidebar_statNumber">2,448</p>
      </div>
      </div>

      <div className="sidebar_bot">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
      </div>
    </div>
  )
}

export default Sidebar;