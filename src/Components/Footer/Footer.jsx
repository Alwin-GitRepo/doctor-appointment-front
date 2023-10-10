import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'


function Footer() {
  return (
    <div>
         <Navbar className="bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='d-grid mx-auto' href="#home">
            <span className='text-secondary-emphasis'><a href='/' style={{textDecoration : "none"}}>www.e-Health.com</a></span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer