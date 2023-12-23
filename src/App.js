import React from 'react';
import './App.css';

import Header from './componets/header/Header.js';
import Sidebar from './componets/sidebar/Sidebar.js';
import Feed  from './componets/feed/Feed.js';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice.js';
import Login from './componets/login/Login.js';

function App() {

  const user=useSelector(selectUser)

  return (
    <div className="app">

      <Header />

      {!user ? (
          <Login/>
        ) : (
        <section className="app-body">

          <Sidebar />
          <Feed/>

          {/* Widgets */}

        </section>
      )}

    </div>
  );
}

export default App;
