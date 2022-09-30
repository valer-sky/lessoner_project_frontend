import React, { useEffect, useState } from 'react';
import { getData } from './services/services';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Body from './components/body/Body';


function App(): any {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   getData(setData)
  // }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Body />
      </div>
    </BrowserRouter>

  );
}

export default App;
