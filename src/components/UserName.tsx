import {useState, useEffect} from "react";
import "./userName.scss";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {getUser} from "../store/loginName/userSlice";
import {AnyAction, Dispatch} from "redux";

type UserNameProps = {
  minSymbol: number;
  maxSymbol: number;
}
const UserName = ({minSymbol, maxSymbol}: UserNameProps): JSX.Element => {
  const userNameRegex = new RegExp('^[A-ZА-ЯЁ \d]{' + minSymbol + ',' + maxSymbol + '}$', 'i');
  const [value, setValue] = useState('');
  const [isBlur, setIsBlur] = useState(false);
  const [addStyle, setAddStyle] = useState('');
  const [error, setError] = useState('');

  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.user.login);

  const fieldHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    dispatch(getUser(e.currentTarget.value));
    if (!userNameRegex.test(e.currentTarget.value)) {
      setError('Invalid username entered');
      setAddStyle('errorInput');
    } else {
      setError('');
    }
  }

  useEffect(() => {
    if (status) {
      setError('User already exists. Please enter a different username');
      setAddStyle('redBorder')
    }
  }, [status]);

  const blurHandle = (e: React.FormEvent<HTMLInputElement>) => {
    setIsBlur(true);
  }

  return (
    <div className='userName'>
      <label className='userNameLabel'>Username</label>
      <input type='text'
             required
             className={`userNameInput ${(error && isBlur) ? addStyle : ''}`}
             onChange={fieldHandler}
             onBlur={blurHandle}/>
      {(error && isBlur) && <span className='error'>{error}</span>}
    </div>
  )
}
export default UserName;
// violettakolendovich@gmail.com
// Radowichewnishewhishechka