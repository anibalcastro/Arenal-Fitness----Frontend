import React, { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgregarColaboradores.css';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

export default function AgregarColaborador() {

    const [inputValues, setInputValues] = useState({
        fullName: "",
        dni: "",
        telNumber: "",
        email: "",
        adress: "",
        birthday: "",
        gender: "",
        bloodType: "",
        role: "",
        comments: "",
    });

    //Cualquier cambio, se guarde en el estado
    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }); // capture inputs


    const validateInput = () => {
        let jsonFields = {
            fullName: "Nombre Completo",
            dni: "Cedula",
            telNumber: "Numero de celular",
            email: "Correo Electronico",
            adress: "Direccion",
            birthday: "Fecha de nacimiento",
            gender: "Genero",
            bloodType: "Tipo de sangre",
            comments: "Comentarios",
        }

        for (const [key, value] of Object.entries(inputValues)) {
            if (value === "") {
                for (const [keyField, valueField] of Object.entries(jsonFields)) {
                    if (keyField === key) {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Debe llenar el campo de ' + valueField,
                            icon: 'error',
                            confirmButtonText: 'OK'
                        })
                        return false;
                    }
                }
            }
        }
        return true;
    }

    // function to save Album in DB
    const guardarColaborador = () => {

        let validate = validateInput();

        if (validate) {
            let date = new Date(inputValues.birthday);
            let birthdayEmployee = ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());

            let addNewEmployee = JSON.stringify(
                {
                    fullName: inputValues.fullName,
                    dni: inputValues.dni,
                    telNumber: inputValues.telNumber,
                    email: inputValues.email,
                    password: inputValues.dni,
                    adress: inputValues.adress,
                    birthday: birthdayEmployee,
                    gender: inputValues.gender,
                    bloodType: inputValues.bloodType,
                    role: inputValues.role,
                    comments: inputValues.role,
                });

            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: addNewEmployee,
                redirect: 'follow'
            };

            fetch("http://localhost:3014/api/users/create_user", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result.message);
                    if (result.message === "Created") {
                        Swal.fire(
                            'USUARIO CREADO',
                            'El usuario ' + inputValues.fullName + ' ha sido creado con exito',
                            'success'
                        );

                        window.location.href = '/dashboard/';
                    }
                    else {
                        Swal.fire(
                            'ERROR',
                            'Ha ocurrido un error',
                            'error'
                        );
                    }
                })
                .catch(error => console.log('error', error));

        }
    }


    return (
        <React.Fragment>
            <div id="divAgregarCliente" className="d-flex justify-content-center ">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <h4 className="title">Agregar nuevo entrenador</h4>
                        </div>
                        <form id="formLogin" encType="multipart/form-data">
                            <input
                                onChange={handleOnChange}
                                type="text"
                                id="fullName"
                                className="fadeIn second"
                                name="fullName"
                                placeholder="NOMBRE COMPLETO"
                                required
                            ></input>

                            <input
                                onChange={handleOnChange}
                                type="number"
                                id="dni"
                                className="fadeIn second"
                                name="dni"
                                placeholder="CEDULA"
                                required
                            ></input>

                            <input
                                onChange={handleOnChange}
                                type="number"
                                id="telNumber"
                                className="fadeIn second"
                                name="telNumber"
                                placeholder="TELEFONO"
                                required
                            ></input>

                            <input
                                onChange={handleOnChange}
                                type="text"
                                id="email"
                                className="fadeIn second"
                                name="email"
                                placeholder="CORREO ELECTRONICO"
                                required
                            ></input>

                            <input
                                onChange={handleOnChange}
                                type="text"
                                id="adress"
                                className="fadeIn second"
                                name="adress"
                                placeholder="DIRECCION"
                                required
                            ></input>
                        </form>
                        <br />
                    </div>
                </div>

                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <br />
                        <form id="formLogin">
                            <input
                                onChange={handleOnChange}
                                type="date"
                                id="birthday"
                                name="birthday"
                                required
                            ></input>

                            <select onChange={handleOnChange} id="gender" name="gender" required>
                                <option value="DEFAULT" disabled selected hidden>
                                    GENERO
                                </option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>

                            <select onChange={handleOnChange} id="bloodType" name="bloodType" required>
                                <option value="" disabled selected hidden>
                                    TIPO DE SANGRE
                                </option>
                                <option value="A">TIPO A</option>
                                <option value="B">TIPO B</option>
                                <option value="AB">TIPO AB</option>
                                <option value="O">TIPO O</option>
                            </select>

                            <select
                                onChange={handleOnChange}
                                id="role"
                                name="role"
                                required
                            >
                                <option value="" disabled selected hidden>
                                    ROL
                                </option>
                                <option value="Administrador">Administrador</option>
                                <option value="Colaborador">Colaborador</option>
                            </select>

                            <textarea
                                onChange={handleOnChange}
                                rows="5"
                                cols="100"
                                placeholder="COMENTARIOS"
                                name="comments"
                                required
                            ></textarea>
                        </form>
                        <button
                            id="submit"
                            onClick={() => guardarColaborador()}
                            className="btn btn-dark"
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}