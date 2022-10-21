import React, {useState} from 'react';
import './App.css';
import ModalEnterPhone from './components/ModalEnterPhone';
import './components/ModalEnterPhone'

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
      <button 
        className='open-btn' 
        onClick={() => setModalActive(true)}
      >
        Open modal
      </button>
      <ModalEnterPhone active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;
