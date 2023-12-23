import React, { useEffect } from 'react';
import './App.css';

import Header from './componets/header/Header.js';
import Sidebar from './componets/sidebar/Sidebar.js';
import Feed  from './componets/feed/Feed.js';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice.js';
import Login from './componets/login/Login.js';
import { auth } from './firebase.js';
import Widgets from './componets/widgets/Widgets.js';

function App() {

  const user=useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      
      if(userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          profileUrl: userAuth.photoURL,
        }))

      }else{
        //user is logged out
        dispatch(logout());
      }
    
    })},[]);

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
          <Widgets/>

        </section>
      )}

    </div>
  );
}

export default App;
