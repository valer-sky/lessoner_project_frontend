import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
  );
}

export default App;
