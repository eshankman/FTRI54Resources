import { useState } from 'react';
import React from 'react';
import Playlists from './components/youtube/YouTube';
import './App.css';

import Navbar from './components/navbar/Navbar';

// import MainPage from './components/MainPage/mainPage';

const App = () => {
  return (
    <div className="bundle">
      <Navbar />
      <Playlists />
      {/* <MainPage /> */}
    </div>
  );
};

export default App;
