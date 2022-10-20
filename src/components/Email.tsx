import { useState } from "react";
import './Email.scss';

type EmailProps = {
  field: {
    name: string,
    onBlur: React.FocusEventHandler<HTMLInputElement>,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string
  };
  error?: string;
}

const Email = ({ field, error }: EmailProps): JSX.Element => {
  const [value, setValue] = useState('');
  return (
    <div className="Email-Wrapper">
      <label htmlFor="email" className="Email-Label">Email</label>
      <input type="text" required minLength={3} maxLength={256} className={"Email-Input" + (error ? " invalid-Email-Input" : "")} placeholder="username@gmail.com" {...field} />
      {error && <div><span className='error-Message'>{error}</span></div>}
    </div>
  )
};

export default Email;