import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Contacts from './components/pages/Contacts/Contacts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/services' element={ <Services />} />
        <Route path='/contacts' element={ <Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;