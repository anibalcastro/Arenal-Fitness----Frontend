import React, { useState, useEffect } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "C:/utnweb/web3/arenal-fitness/src/Images/Logo.png";
var axios = require("axios");

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

    fetch("http://localhost:3012/api/users/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const arrayData = data.data;

        if (arrayData) {
          console.log("Datos Correctos");

          let json = {
            id: arrayData._id,
            fullname: arrayData.fullname,
            email: arrayData.email,
            role: arrayData.role,
          };

          localStorage.setItem("UserLogged", JSON.stringify(json));
          document.getElementById("formLogin").reset();
          window.location.href = "/dashboard/dashboard";
        } else {
          alert("Error, datos ingresados, no coinciden.");
          document.getElementById("formLogin").reset();
        }
      })
      .catch((error) => {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="container d-flex align-items-center justify-content-center">
          <img id="imgThumbnail" className="logo" src={logo} alt="logo"></img>
        </div>

        <div className="container wrapper fadeInDown">
          <div id="formContent" className="container">
            <div className="fadeIn first">
              <h4 className="title">INICIO DE SESION</h4>
            </div>
            <form id="formLogin">
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
            <Link
              onClick={() => iniciarSesion()}
              to="#"
              type="submit"
              className="btn btn-dark"
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
