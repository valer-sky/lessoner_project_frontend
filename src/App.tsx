import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ModalConfirmCode from './components/ModalConfirmCode';
import './components/ModalConfirmCode'

function App() {
  const [modalActive, setModalActive] = useState<boolean>(false);
  return (
    <div className="App">
      <button 
        className='open-btn' 
        onClick={() => setModalActive(true)}
      >
        Open modal
      </button>
      <ModalConfirmCode active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;
