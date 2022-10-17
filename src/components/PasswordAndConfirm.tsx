import { useState } from "react";
import open_eye from "./icons/open_eye.svg";
import close_eye from "./icons/close_eye.svg";
import "./passwordAndConfirm.scss";

type PasswordProps = {
  minSymbol: number;
  maxSymbol: number;
  isConfirm: boolean;
  field: object;
  error?: string;
}

const PasswordAndConfirm = ({ minSymbol, maxSymbol, isConfirm, field, error }: PasswordProps): JSX.Element => {
  const [value, setValue] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);

  const showPassword = (e: React.MouseEvent<HTMLImageElement>): void => {
    if (visiblePassword !== false) {
      setVisiblePassword(false);
    } else {
      setVisiblePassword(true);
    }
  }

  return (
    <div className='password'>
      <label className='passwordLabel'>{isConfirm ? 'Confirm password' : 'Password'}
        <input type={visiblePassword ? 'text' : 'password'}
          className={`passwordInput ${error ? `errorInput` : ``}`}
          onChange={(e) => setValue(e.currentTarget.value)}
          minLength={minSymbol}
          maxLength={maxSymbol}
          value={value}
          {...field}
          required />
        <img className='image' alt='eye' src={visiblePassword ? open_eye : close_eye} onClick={showPassword} />
        {error && <span className='error'>{error}</span>}
      </label>
    </div>
  )
}

export default PasswordAndConfirm;