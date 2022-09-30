import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';



const Header:any = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">

                <Container>
                <Link to="/"><Navbar.Brand  >Lessoner</Navbar.Brand></Link>
                
                <Nav className="me-auto">  
                    <Link to="/categories" className='nav-link'>Categories</Link>
                    <Link to="/lessons"className='nav-link'>Lessons</Link>
                    <Link to="/about" className='nav-link'>About</Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link >English</Nav.Link>
                    <Nav.Link >Русский</Nav.Link>  
                </Nav>
                <Link to="/users/sign_in"><Button  variant="dark" className="btn btn-outline-light btn-sm">Log in</Button></Link>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header