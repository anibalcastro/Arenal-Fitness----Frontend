import React, { useEffect } from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from 'C:/utnweb/web3/arenal-fitness/src/Images/Logo.png';
import { Link } from 'react-router-dom';

function Header() {

    //Function to logout
    const cerrarSesion = () => {
        localStorage.removeItem('Login');
        window.location.href = "/";
    }



    //Funtion to show menu
    const validateSession = () => {
        let valido = false;
        const userLogged = JSON.parse(localStorage.getItem('Login'));
        console.log(userLogged);
        if (userLogged) {

            valido = true;
        }

        return valido;
    }

    useEffect(() => {
        //Set title
        validateSession();

    }, []);

    return (
        <React.Fragment >
            <nav id='header' className="navbar navbar-expand-lg navbar-light bg-light" >
                <Link class="navbar-brand" href="#">Navbar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                validateSession() ?
                 <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" href="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/dashboard/clientes">Clientes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/dashboard/productos">Productos</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" href="#">Action</Link>
                                <Link class="dropdown-item" href="#">Another action</Link>
                                <Link class="dropdown-item" href="#">Something else here</Link>
                            </div>
                        </li>
                    </ul>
                </div>

                : <div className="navbar-brand" role="group" aria-label="Basic example">
                    <Link id='btnIngresar' type="button" to="/login" className="btn btn-secondary">Ingresar</Link>
                </div>




            </nav>
        </React.Fragment>);
}

export default Header;