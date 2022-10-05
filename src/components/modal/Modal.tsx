import "./modal.scss"
import {useState} from "react";

const Modal = () => {
  const [visible, setVisible] = useState('');
  const showModal = () => {
    console.log(visible)
    visible ? setVisible('') : setVisible('show');
  }
  return (
      <div className='field'>
        <div className={'modal ' + `${visible}`}>
        <span className='close'
              onClick={showModal}>
        </span>
        </div>
        <button type='button'
                className='button'
                onClick={showModal}>
          Push me
        </button>
      </div>
  )
}
export default Modal;