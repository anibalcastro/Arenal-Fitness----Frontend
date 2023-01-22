import React, { useState, useEffect } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "C:/utnweb/web3/arenal-fitness/src/Images/Logo.png";
import Alert  from "react-bootstrap/Alert";


function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = `Arenal Fitness - Iniciar Sesión`;
    //console.log("email:", data.email);
    //console.log("password:", data.password);
  });

  /**
   *
   * @param {*} evt
   */
  const handleChange = (evt) => {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value,
    });
  };

  /**
   *
   */
  const iniciarSesion = () => {
    let user = {
      email: data.email,
      password: data.password,
    };

    fetch("http://localhost:3014/api/users/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const arrayData = data.data;

        if (arrayData !== 'Invalid credencial!') {
          
          let json = {
            id: arrayData._id,
            fullName: arrayData.fullName,
            email: arrayData.email,
            expirationMembership: arrayData.expirationMembership,
          };

          let role = arrayData.role;

          localStorage.setItem("UserRole", JSON.stringify(role));
          localStorage.setItem("UserLogged", JSON.stringify(json));
          window.location.href ='/dashboard';
        } else {
            //Alerta de error
          document.getElementById('alertError').removeAttribute('hidden');
          document.getElementById("loginForm").reset();
        }
      })
      .catch((error) => {
        document.getElementById('alertServer').removeAttribute('hidden');
        //console.log(error);
      });
  };

  return (
    <React.Fragment>
       <Alert key={'danger'} variant='danger' className='alertError' id='alertError' hidden="hidden">
         Error datos incorrectos. 
         Intentelo de nuevo.
        </Alert>
        <Alert key={'danger'} variant='danger' className='alertServer' id='alertServer' hidden="hidden">
         Error en el servidor, Intentelo mas tarde.
        </Alert>
      <div className="container">
        <div className="container d-flex align-items-center justify-content-center">
          <img id="imgThumbnail" className="logo" src={logo} alt="logo"></img>
        </div>

        <div className="container wrapper fadeInDown">
          <div id="formContent" className="container">
            <div className="fadeIn first">
              <h4 className="title">INICIO DE SESION</h4>
            </div>
            <form id="loginForm">
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="email"
                placeholder="EMAIL"
                value={data.email}
                onChange={handleChange}
              ></input>
              <input
                type="password"
                id="current-password"
                autoComplete="on"
                className="fadeIn third"
                name="password"
                placeholder="CONTRASEÑA"
                value={data.password}
                onChange={handleChange}
              ></input>
            </form>
            <button
              onClick={() => iniciarSesion()}
              //to={redirection}
              type="submit"
              className="btn btn-dark"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
