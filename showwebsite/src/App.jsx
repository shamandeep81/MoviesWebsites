import React from 'react';
import './Components/App.css';
import './Components/Header.css';
import Index from './Components/Index';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from './Components/Button';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <><Header /> <Index /></>} />
        <Route path="/button" element={<Button />} />
      </Routes>
    </Router>
  );
}

export default App;
