import {useState} from "react";
import "./phoneNumber.scss"

const PhoneNumber = () => {
  const numberRegex = /[^\d]$/;
  // const phoneNumberRegex = /[^\d]$/;
  const [value, setValue] = useState('');
  const [isBlur, setIsBlur] = useState(false);

  const fieldHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (!numberRegex.test(e.currentTarget.value)) {
      setValue(e.currentTarget.value);
    }
  }
  const blurHandle = (e: React.FormEvent<HTMLInputElement>) => {
      // if (phoneNumberRegex.test(e.currentTarget.value)) {
      //   setIsBlur(true);
      // }
  }
  return (
    <div className={'phoneNumber'}>
      <label className={'phoneNumberLabel'}>Phone number</label>
      <input className={'phoneNumberInput'}
             type={'text'}
             onChange={fieldHandler}
             onBlur={blurHandle}
             value={value}
             required/>
      {/*{(isBlur) && <span className={'error'}>Please enter a phone number in international format</span>}*/}

    </div>
  )
}
export default PhoneNumber;