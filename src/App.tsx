import React, {useState} from 'react';
import './App.css';
import ModalEnterPhone from './components/ModalEnterPhone';
import './components/ModalEnterPhone'

function App() {
  const [modalActive, isModalActive] = useState(false);
  return (
    <div className="App">
      <button 
        className='open-btn' 
        onClick={() => isModalActive(true)}
      >
        Open modal
      </button>
      <ModalEnterPhone isActive={modalActive} setIsActive={isModalActive}/>
    </div>
  );
}

export default App;
