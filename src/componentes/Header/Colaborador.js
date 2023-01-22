import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showNavSecond, setShowNavSecond] = useState(false);

  //Function to logout
  const cerrarSesion = () => {
    localStorage.removeItem('UserLogged');
    localStorage.removeItem('UserRole');
    window.location.href = "/";
  }

  return (
    <React.Fragment>
      <header>
        <MDBNavbar expand="lg" light bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarBrand href="/">Arenal Fitness GYM</MDBNavbarBrand>
            <MDBNavbarToggler
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavSecond(!showNavSecond)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNavSecond}>
              <MDBNavbarNav>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="/dashboard/clientes"
                >
                  Clientes
                </MDBNavbarLink>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Rutinas
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Crear Rutina</MDBDropdownItem>
                    <MDBDropdownItem link>Editar Rutina</MDBDropdownItem>
                    <MDBDropdownItem link>Ver Rutina</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <MDBNavbarLink href="/dashboard/ejercicios">
                  Ejercicios
                </MDBNavbarLink>
                <MDBNavbarLink href="/dashboard/rutina">Rutinas</MDBNavbarLink>
                <MDBNavbarLink href="/dashboard/facturacion">
                  Factuacion
                </MDBNavbarLink>
                <MDBNavbarLink href="/dashboard/productos">
                  Productos
                </MDBNavbarLink>

              </MDBNavbarNav>
              <MDBContainer className='containerLogout'>
                <button onClick={() => cerrarSesion()} className='btn btn-danger'>Salir</button>
              </MDBContainer>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </header>
    </React.Fragment>
  );
}
