import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Property from './components/pages/Property';
import SignUp from './components/pages/SignUp';
import HomeInfo from './components/pages/HomeInfo';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/property' Component={Property} />
          <Route path='/sign-up' Component={SignUp} />
          <Route path='/home-info' Component={HomeInfo} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
