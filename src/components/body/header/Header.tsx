import {Link} from "react-router-dom";
import "./Header.css";
import Button from "../../Button";
import Logo from "../../icons/Logo.svg";
import {useAppSelector} from "../../../store/hooks";

const Header = () => {
  const isDefaultPage = useAppSelector(state => state.value.isDefaultHeader);
  const page = useAppSelector(state => state.value.page);

  return (
    <div className="sideBar">
      <div className='menu'>
        <span className='menuActive'></span>
      </div>
      <div className='header'>
        <Link to='/n' className='logoName'>
          <img className='logo' src={Logo} alt="Logo"/>
          <h4 className='titleHeader'>The lessoner</h4>
        </Link>
        <div className='seachButton'>
          <input className='search' type='text'/>
          <Link to="/users/sign_in" className='loginLink'>
            <Button buttonType='button' buttonText='Log in' className='buttonLogin'/>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
