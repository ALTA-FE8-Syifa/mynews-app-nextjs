import { NewspaperIcon } from '@heroicons/react/24/solid';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function NavbarComp() {
  return (
    <>
        <Navbar bg="light">
        <Container>
          <Navbar.Brand><NewspaperIcon style={{ width : "4rem"}}/>News App</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComp