import React, {useState} from 'react';
import './App.css';
import ModalConfirmCode from './components/ModalConfirmCode';
import './components/ModalConfirmCode'

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
      <ModalConfirmCode isActive={modalActive} setIsActive={isModalActive}/>
    </div>
  );
}

export default App;
