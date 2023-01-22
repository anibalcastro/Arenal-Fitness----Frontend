import React, { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AgregarCliente.css";
import Swal from 'sweetalert2'

function AgregarClientes() {
    const [inputValues, setInputValues] = useState({
        fullName: "",
        thumbnail: "",
        dni: "",
        telNumber: "",
        email: "",
        password: "",
        adress: "",
        birthday: "",
        gender: "",
        bloodType: "",
        comments: "",
    });

    //Cualquier cambio, se guarde en el estado
    const handleOnChange = useCallback((event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    });

    const handleImageUpload = async (event) => {
        const files = event.target.files[0];
        if (files) {
            let formdata = new FormData();
            formdata.append("avatar", event.target.files[0]);
            //console.log(Object.fromEntries(formdata));

            // eslint-disable-next-line no-unused-vars
            const result = await fetch("http://localhost:3014/uploadAvatar", {
                method: "POST",
                body: formdata,
                //redirect: "follow",
                //crossorigin: true,
            }).then((response) => response.json())
                .then((data) =>  setInputValues({ ...inputValues, thumbnail: data.data }));
        }
    }

    const validateInput = () => {
        let jsonFields = {
            fullName: "Nombre Completo",
            thumbnail: "Imagen",
            dni: "Cedula",
            telNumber: "Numero de celular",
            email: "Correo Electronico",
            adress: "Direccion",
            birthday: "Fecha de nacimiento",
            gender: "Genero",
            bloodType: "Tipo de sangre",
            comments: "Comentarios",
        }
        
        for (const [key, value] of Object.entries(inputValues)){
            if (value === ""){
                for (const [keyField, valueField] of Object.entries(jsonFields)){
                    if (keyField === key){
                        Swal.fire({
                            title: 'Error!',
                            text: 'Debe llenar el campo de: '+valueField,
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

    const expirationMembership = () => {
        let expiration = new Date();
        return((expiration.getMonth() + 1)+'/'+ expiration.getDate() +'/'+ expiration.getFullYear());
    }

    // function to save Album in DB
    const guardarCliente = () => {

        let validate = validateInput();
        if (validate){
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            let date = new Date(inputValues.birthday);
            let birthday = ((date.getMonth() + 1)+'/'+date.getDate()+'/'+date.getFullYear());
    
    
            let AddClient = JSON.stringify({
                fullName: inputValues.fullName,
                thumbnail: inputValues.thumbnail,
                dni: inputValues.dni,
                telNumber: inputValues.telNumber,
                email: inputValues.email,
                password: inputValues.dni,
                adress: inputValues.adress,
                birthday: birthday,
                gender: inputValues.gender,
                bloodType: inputValues.bloodType,
                membership: inputValues.membership,
                expirationMembership: expirationMembership(),
                status: "Inactivo",
                comments: inputValues.comments,
                role: "Cliente",
            });
    
            
    
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: AddClient,
                redirect: 'follow'
              };
              
              fetch("http://localhost:3014/api/users/create_user", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result.message);
                    if (result.message === "Created") {
                        Swal.fire(
                            'USUARIO CREADO',
                            'El usuario '+inputValues.fullName+ ' ha sido creado con exito',
                            'success'
                        );

                        window.location.href ='/dashboard/clientes';
                    }
                    else{
                        Swal.fire(
                            'ERROR',
                            'Ha ocurrido un error',
                            'error'
                          );
                    }
                })
                .catch(error => console.log('error', error));
        }

      
    };

    useEffect(() => {
        //document.title('Arenal Fitness - Agregar Cliente');
    });

    return (
        <React.Fragment>
            <div id="divAgregarCliente" className="d-flex justify-content-center ">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <h4 className="title">Agregar nuevo cliente</h4>
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
                                onChange={handleImageUpload}
                                type="file"
                                id="thumbnail"
                                className="fadeIn second"
                                name="thumbnail"
                                accept="image/*"
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
                                id="membresia"
                                name="membership"
                                required
                            >
                                <option value="" disabled selected hidden>
                                    MEMBRESIA
                                </option>
                                <option value="Semana">Semana</option>
                                <option value="Quincena">Quincena</option>
                                <option value="Mensualidad Estudiante">
                                    Mensualidad Estudiante
                                </option>
                                <option value="Mensualidad Completa">Mensualidad</option>
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
                            onClick={() => guardarCliente()}
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

export default AgregarClientes;
