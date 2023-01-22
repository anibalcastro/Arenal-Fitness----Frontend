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
    localStorage.removeItem('UserRole')
    window.location.href = "/login";
  };

  return (
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
              <MDBNavbarLink href="/dashboard/colaboradores">
                Colaboradores
              </MDBNavbarLink><MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Reportes
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Clientes activos</MDBDropdownItem>
                  <MDBDropdownItem link>Clientes no activos</MDBDropdownItem>
                  <MDBDropdownItem link>Clientes morosos</MDBDropdownItem>
                  <MDBDropdownItem link>Ingresos mensuales</MDBDropdownItem>
                  <MDBDropdownItem link>Ingresos diarios</MDBDropdownItem>
                  <MDBDropdownItem link>Ingresos por productos</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBNavbarLink href="/dashboard/ejercicios">
                Ejercicios
              </MDBNavbarLink>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Rutinas
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="/dashboard/rutina">Nueva rutina</MDBDropdownItem>
                  <MDBDropdownItem link href="/dashboard/misrutinas">Ver rutinas</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Facturacion
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="/dashboard/facturacion">Nueva venta</MDBDropdownItem>
                  <MDBDropdownItem link>Reimprimir factura</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
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
  );
}
