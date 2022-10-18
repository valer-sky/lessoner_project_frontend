import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [enterLang, setEnterLang] = useState(true);
  const engLang = () => {
    setEnterLang(true);
  };
  const ruLang = () => {
    setEnterLang(false);
  };
  return (
    <div className="nav-bar">
      <Link to="/">
        <div>{enterLang ? "Lessoner" : "Учитель"}</div>
      </Link>
      <Link to="/categories">
        <div className="nav-link">{enterLang ? "Categories" : "Категории"}</div>
      </Link>
      <Link to="/lessons">
        <div className="nav-link">{enterLang ? "Lessons" : "Уроки"}</div>
      </Link>
      <Link to="/about">
        <div className="nav-link">{enterLang ? "About" : "O чем"}</div>
      </Link>
      <div>
        <button onClick={engLang}>English</button>
        <button onClick={ruLang}>Русский</button>
      </div>
      <Link to="/users/sign_in">
        <button>{enterLang ? "Log in" : "Вход"}</button>
      </Link>
    </div>
  );
};
export default Header;
