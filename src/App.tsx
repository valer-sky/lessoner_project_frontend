import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to="/login"><p>Log in</p></Link>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
