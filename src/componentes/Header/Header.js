import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuIndex from "./index";
import MenuAdministrador from './Administrador';
import MenuColaborador from './Colaborador';
import MenuCliente from './Cliente';

function Header() {


    //Funtion to show menu
    const validateSession = () => {

        const userLogged = JSON.parse(localStorage.getItem('login'));
        if (userLogged || userLogged != null) {
            return true;
        }
        return false;
    }

    const validateRolAdministrador = () => {
        if (JSON.parse(localStorage.getItem('rol')) == 'Administrador') {
            return true;
        }
        return false;
    }

    const validateRolCliente = () => {
        if (JSON.parse(localStorage.getItem('rol')) == 'Cliente') {
            return true;
        }
        return false;
    }

    const validateRolColaborador = () => {
        if (JSON.parse(localStorage.getItem('rol')) == 'Colaborador') {
            return true;
        }
        return false;
    }

    useEffect(() => {
        console.log(validateSession());
    });



    return (
        <React.Fragment >
            {

                !validateSession() ?
                    <MenuIndex />
                    :
                    validateRolAdministrador() ?
                        <MenuAdministrador />
                        :
                        validateRolCliente() ?
                            <MenuCliente />
                            :
                            validateRolColaborador() ?
                                <MenuColaborador />
                                : ""
            }

        </React.Fragment>

    );
}

export default Header;