import React, { useContext } from 'react';
import { Dropdown, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import './Header.css';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      collapseOnSelect
      className='mb-4'
      expand='lg'
      bg='light'
      variant='light'
    >
      <Container>
        <Navbar.Brand>
          <Link to='/' className='web-title'>
            Authentication
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='home'>
              Home
            </Link>
            <Link to='/news/:id' className='news'>
              News
            </Link>

            <Link to='/terms' className='about'>
              About
            </Link>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button variant='light' onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to='/login' className='me-2 signin'>
                    SignIn
                  </Link>
                  <Link to='/register' className='me-2 signup'>
                    SignUp
                  </Link>
                </>
              )}
            </>
            <Link to='/profile'>
              {user?.photoURL ? (
                <Image height={40} roundedCircle src={user?.photoURL}></Image>
              ) : (
                <FaUser className='user'></FaUser>
              )}
            </Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
