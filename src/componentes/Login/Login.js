import React from 'react';
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';



function Login() {


    //Funcion para iniciar sesion.
    const iniciarSesion = () => {
        localStorage.setItem('Login', JSON.stringify('Anibal Castro'));
        document.getElementById('formLogin').reset();
        window.location.href('/dashboard');
    }

    return (
        <React.Fragment>

            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h4 className='title'>Login</h4>
                    </div>
                    <form id='formLogin'>
                        <input type="text" id="login" className="fadeIn second" name="username" placeholder="User or email" ></input>
                        <input type="password" id="current-password" autoComplete='on' className="fadeIn third" name="password" placeholder="Your password" ></input>
                    </form>
                    <Link onClick={() => iniciarSesion()} to="/dashboard" type="submit" className="btn btn-dark" >Entrar</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;
