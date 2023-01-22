import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from 'mdb-react-ui-kit';


export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>Arenal Fitness GYM</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavSecond(!showNavSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavSecond}>
            <MDBContainer fluid className='containerLogin'>
              <MDBNavbarLink href='/login'>
                <button className='btn btn-success' >Ingresar</button>
              </MDBNavbarLink>
            </MDBContainer>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}