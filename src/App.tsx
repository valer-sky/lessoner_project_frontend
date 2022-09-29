import React, { useEffect, useState } from 'react';
import { getData } from './services/services';
import './App.css';

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    getData(setData)
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
