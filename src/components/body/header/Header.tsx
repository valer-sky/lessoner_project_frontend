import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';




const Header:any = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href='/' >Lessoner</Navbar.Brand>
                <Nav className="me-auto">  
                    <Nav.Link href='/categories' className='nav-link'>Categories</Nav.Link>
                    <Nav.Link href='/lessons' className='nav-link' >Lessons</Nav.Link>
                    <Nav.Link href='/about' className='nav-link'>About</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link >English</Nav.Link>
                    <Nav.Link >Русский</Nav.Link>  
                </Nav>
                <Button href="/users/sign_in" variant="dark" className="btn btn-outline-light btn-sm">Log in</Button>
            </Navbar>
        </header>
    )
}

export default Header