import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LinkedInLogin from './LinkedInLogin';
import LinkedInRedirect from './LinkedInRedirect';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header> */}
      <Router>
      <Routes>
        <Route path="/" element={<LinkedInLogin />} />
        <Route path="/linkedin" element={<LinkedInRedirect />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
