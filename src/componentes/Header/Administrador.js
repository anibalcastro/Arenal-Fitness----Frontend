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
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from 'mdb-react-ui-kit';


export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showNavSecond, setShowNavSecond] = useState(false);

    //Function to logout
    const cerrarSesion = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('rol')
        window.location.href = "/";
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
                                Clientes
                            </MDBNavbarLink>
                            <MDBNavbarLink href='/dashboard/colaboradores'>Colaboradores</MDBNavbarLink>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Reportes
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Clientes</MDBDropdownItem>
                                    <MDBDropdownItem link>Ingresos mensuales</MDBDropdownItem>
                                    <MDBDropdownItem link>Ingresos diarios</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                            <MDBNavbarLink href='/dashboard/ejercicios'>Ejercicios</MDBNavbarLink>
                            <MDBNavbarLink href='/dashboard/rutina'>Rutinas</MDBNavbarLink>
                            <MDBNavbarLink href='/dashboard/facturacion'>Factuacion</MDBNavbarLink>
                            <MDBNavbarLink href='/dashboard/productos'>Productos</MDBNavbarLink>
                            <MDBNavbarLink onClick={cerrarSesion} href='#'>Salir</MDBNavbarLink>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </header>
    );
}