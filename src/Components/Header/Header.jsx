import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRww80MDk7jZwYPyXX7nyOvjfBQybhew8-dVA&usqp=CAU"
              width="35"
              height="30"
              className="d-inline-block align-top me-2"
            />{' '}
            E - Health
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header