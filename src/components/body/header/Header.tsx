import {Link} from "react-router-dom";
import "./Header.css";
import Button from "../../Button";
import Logo from "../../icons/Logo.svg";
import Bell from "../../icons/Bell.svg";
import Avatar from "../../icons/Avatar.svg";
import {useAppSelector} from "../../../store/hooks";
import Magnifier from "../../icons/blackMagnifier.svg";

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
          <img className='logo' src={Logo} alt='Logo'/>
          <h4 className='titleHeader'>The lessoner</h4>
          {page === 'myPage' ? <Link to={'/myStudio'} className='myStudio'>My studio</Link> : null}
        </Link>
        <div className='searchButton'>
          <Link to='/search' className='magnifier'>
            <img src={Magnifier} alt='search'/>
          </Link>
          <input className='search' type='text' placeholder='Search'/>
          {isDefaultPage ?
            <div className='userItem'>
              {page ?
                <Link to='/' className='sectionButton'>
                  {page === 'sectionPage' ?
                    <Button buttonType='button' buttonText='My studio' className='userButton'/>
                    : <Button buttonType='button' buttonText='Go study' className='userButton'/>}
                </Link> : null}
              <img src={Bell} alt='Bell' className='bell'/>
              <img src={Avatar} alt='Avatar' className='avatar'/>
            </div>
            :
            <Link to="/users/sign_in" className='loginLink'>
              <img src={Avatar} alt='Avatar' className='avatarLogin'/>
              <Button buttonType='button' buttonText='Log in' className='buttonLogin'/>
            </Link>}
        </div>
      </div>
    </div>
  );
};
export default Header;
