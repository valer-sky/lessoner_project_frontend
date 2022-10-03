import {useState} from "react";

let password = null;
const FormInput = ({label, type, required, name, validation}) => {
  const [field, setField] = useState('');
  const [fieldError, setFieldError] = useState(false);
  const [fieldBlur, setFieldBlur] = useState(false);

  const fieldHandler = (e) => {
    console.log(validation.test(e.target.value))
    console.log(e.target.value)
      if ( !validation.test(e.target.value)) {
        setFieldError(true);
        e.target.style.borderColor = 'red';
      } else {
        setFieldError(false);
        e.target.style.borderColor = '#0747a6';
      }
      setField(e.target.value);
  }

  const blurHandler = (e) => {
    if (e.target.name === label) {
      setFieldBlur(true);
    }
  }

  return (
    <div style={{margin: '20px 0'}}>
      <label style={{display: 'block', fontWeight: 'bold', margin: '5px 0'}}>{label}</label>
      <input onChange={e => fieldHandler(e)}
             onBlur={e => blurHandler(e)}
             name={label}
             value={field}
             type={type}
             required={required}
             style={{
               width: '100%',
               boxSizing: 'border-box',
               padding: '0.5em',
               border: '1px solid #0747a6',
               borderRadius: '0.2em'
             }}/>
      {(fieldError && fieldBlur) && <div style={{color: 'red'}}>{label} entered incorrectly</div>}
    </div>
  )
}
export default FormInput;