import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { NewspaperIcon } from '@heroicons/react/24/solid'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComp() {
  return (
    <div>
        <Navbar bg="light">
        <Container>
          <Navbar.Brand><NewspaperIcon style={{ width : "4rem"}}/>News App</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComp