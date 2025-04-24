import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/mainPage';
// import YouTube from './components/youtube/YouTube';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/login';
import Quotes from './components/Quotes/Quotes';
import ThankYou from './components/thankyou/ThankYou';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bundle">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/youtube" element={<YouTube />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
