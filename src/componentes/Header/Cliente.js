import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from 'mdb-react-ui-kit';


export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showNavSecond, setShowNavSecond] = useState(false);

  const cerrarSesion = () => {
    localStorage.removeItem('UserLogged');
    localStorage.removeItem('UserRole')
    window.location.href = "/login";
  }

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
            <MDBNavbarNav>
              <MDBNavbarLink active aria-current='page' href='/dashboard/clientes'>
                Progreso
              </MDBNavbarLink>
              <MDBNavbarLink href='/dashboard/misrutinas'>Rutina</MDBNavbarLink>
              <MDBNavbarLink href='/dashboard/ejercicios'>Ejercicios</MDBNavbarLink>
              <MDBNavbarLink href='/dashboard/productos'>Productos</MDBNavbarLink>
            </MDBNavbarNav>
            <MDBContainer className='containerLogout'>
              <button onClick={() => cerrarSesion()} className='btn btn-danger'>Salir</button>
            </MDBContainer>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}