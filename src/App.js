import React from 'react';
import './App.css';

import Header from './componets/header/Header.js';
import Sidebar from './componets/sidebar/Sidebar.js';
import { Feed } from './componets/feed/Feed.js';

function App() {
  return (
    <div className="app">

      <Header />

      {/* App Body */}

      <div className="app-body">

        <Sidebar />
        <Feed/>

      </div>

        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}



    </div>
  );
}

export default App;
