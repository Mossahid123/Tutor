import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] =useAuthState(auth);

    const handleSingOut =() => {
        signOut(auth);
    }
    return (
        <div className=''>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Tea Time Tutoring</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#tutors">Tutors</Nav.Link>
                            <Nav.Link href="home#blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            { user?
                           <button className='btn btn-link text-white text-decoration-none' onClick={handleSingOut}>Sing out</button>:
                                <Nav.Link as={Link} to='/login'>
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;