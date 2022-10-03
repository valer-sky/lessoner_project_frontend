import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./Header.css"
import { useState } from 'react';





const Header: any = () => {
    const [enterLang, setEnterLang]:any =useState(true);
    const engLang:any=()=>{
       setEnterLang(true)
    }
    const ruLang:any=()=>{
        setEnterLang(false)
    }
  
    function CollapsibleExample() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/"><Navbar.Brand >{enterLang?"Lessoner":"Учитель"}</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/categories"><Navbar className='nav-link' >{enterLang?"Categories":"Категории"}</Navbar></Link>
                        <Link to="/lessons"><Navbar className='nav-link' >{enterLang?"Lessons":"Уроки"}</Navbar></Link>
                        <Link to="/about"><Navbar className='nav-link'>{enterLang?"About":"O чем"}</Navbar></Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link onClick={engLang}>English</Nav.Link>
                        <Nav.Link onClick={ruLang} >Русский</Nav.Link>
                    </Nav>
                    <Nav>
                        <Link to="/users/sign_in"><Button variant="dark" className="btn btn-outline-light btn-sm">{enterLang?"Log in":"Авторизация"}</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
    return (
        <header>
            <CollapsibleExample  />
        </header>
    )
}

export default Header