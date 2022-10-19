import React,  {FC, useEffect, useState} from 'react';
import './ModalEnterPhone.scss';

interface CardProps {
  active: boolean;
  setActive: (bool: boolean) => void;
}

const ModalEnterPhone: FC<CardProps> = 
  ({
    active, 
    setActive,
  }) => {
  
  const [phone, setPhone] = useState('');
  const [isPhoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState('The input field must be filled');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
      setFormValid(!phoneError);
  }, [phoneError])

  const sendphone = () => {
    setActive(false);
  }

  const blurHandler = () => {
    setPhoneDirty(true);
  }

  

  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;

    const {value} = e.target
    const phoneIsMatched = re.test(value)

    if (!value) {
      setPhoneError('The input field must be filled');
    } else if (!phoneIsMatched) {
      setPhoneError('Phone number incorrect');
    } else {
      setPhoneError('');
    }
  }

  return (
    <div 
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}  
    >
      <div 
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={e => e.stopPropagation()}
      >
        <div className="enterphone__content">
          <h1 className="enterphone__title">
            Enter your phone number
          </h1>
           <form method='get'>
            <label  className="enterphone__label">
              <span className="enterphone__label-text">
                Phone number
              </span> 
              <input
                name='phone'
                value={phone}
                onChange={e => {
                  setPhone(e.target.value);
                  phoneHandler(e);
                }}
                onBlur={blurHandler} 
                type="tel" 
                placeholder='+375000000000'
                className="enterphone__input" 
              />
              {(isPhoneDirty && phoneError) && <div className='error' style={{color: 'red'}}>{phoneError}</div>}
            </label>
            <button
              type='submit'
              disabled={!formValid}
              onClick={sendphone}
              className="enterphone__submit"
            >
              Submit code
            </button>
          </form>
        </div>
      </div>  
    </div>
  )
}

export default ModalEnterPhone;