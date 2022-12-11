import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/dashboard' activeStyle>
			Dashboard
		</NavLink>
		<NavLink to='/dashboard/clientes' activeStyle>
			Clientes
		</NavLink>
		<NavLink to='/dashboard/productos' activeStyle>
			Productos
		</NavLink>
		<NavLink to='/dashboard/facturacion' activeStyle>
			Facturacion
		</NavLink>
		<NavLink to='/dashboard/colaboradores' activeStyle>
			Colaboradores
		</NavLink>
        <NavLink to='/dashboard/reportes' activeStyle>
			Reportes
		</NavLink>
        <NavLink to='/dashboard/ejercicios' activeStyle>
			Ejercicios
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
