import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Container, NavbarBrand } from 'react-bootstrap';
import "./Header.css"



function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/"><Navbar.Brand >Lessoner</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/categories"><Navbar className='nav-link' >Categoryes</Navbar></Link>
                        <Link to="/lessons"><Navbar className='nav-link' >Lessons</Navbar></Link>
                        <Link to="/about"><Navbar className='nav-link'>About</Navbar></Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link >English</Nav.Link>
                        <Nav.Link >Русский</Nav.Link>
                    </Nav>
                    <Nav>
                        <Link to="/users/sign_in"><Button variant="dark" className="btn btn-outline-light btn-sm">Log in</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



const Header: any = () => {
    return (
        <header>


            <CollapsibleExample />


            {/* <Navbar bg="dark" variant="dark">
                <Container >
                    <Link to="/"><Navbar.Brand  >Lessoner</Navbar.Brand></Link>
                    <Nav className="me-auto">
                        <Link to="/categories" className='nav-link'>Categories</Link>
                        <Link to="/lessons" className='nav-link'>Lessons</Link>
                        <Link to="/about" className='nav-link'>About</Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link >English</Nav.Link>
                        <Nav.Link >Русский</Nav.Link>
                    </Nav>
                    <Link to="/users/sign_in"><Button variant="dark" className="btn btn-outline-light btn-sm">Log in</Button></Link>
                </Container>
            </Navbar> */}
        </header>
    )
}

export default Header