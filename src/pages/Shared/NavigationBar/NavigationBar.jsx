import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(result => {return result})
    .catch(error=>console.log(error))
    }
    return (
        <Container>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-75 d-flex justify-content-center">
            
            <p ><Link to='/'>Home</Link></p>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            
            
                        </Nav>
                        <Nav className='ms-auto d-flex align-items-center'>
                        
                            {user && <Nav.Link href="#link"><FaUserCircle/></Nav.Link>}
                          

                            {user? <Button onClick={handleLogOut} variant='danger'>Log Out</Button>: <Link to='/login'><Button variant='success'>Log In</Button></Link>}
                          

                        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;