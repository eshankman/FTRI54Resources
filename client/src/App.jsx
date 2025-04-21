import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/mainPage';
import YouTube from './components/youtube/YouTube';
import Contact from './components/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bundle">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/youtube" element={<YouTube />} />

          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
