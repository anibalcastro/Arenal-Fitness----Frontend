import React, { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgregarCliente.css';
import {Link} from 'react-router-dom';

function AgregarClientes() {

    const [idUser, setIdUser] = useState(''); //Id usuario logueado
    const [inputValues, setInputValues] = useState({
        albumName: '', description: ''
    }); //album name and description

    //Cualquier cambio, se guarde en el estado
    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }); // capture inputs

    // function to save Album in DB
    const guardarCliente = () => {
        let addAlbum = 
        {idUser: "62df6b2d29ac0cbc96b15b57", //CAMBIAR POR ID USUARIO
        albumName: inputValues.albumName,
        description: inputValues.description}
        
    }
    

    return (
        <React.Fragment>

        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <h4 className='title'>Agregar nuevo cliente</h4>
                </div>
                <form id='formLogin'>
                    <input onChange={handleOnChange} type="text" id="login" className="fadeIn second" name="nombreCompleto" placeholder="NOMBRE COMPLETO" ></input>

                    <input onChange={handleOnChange} type="number" id="login" className="fadeIn second" name="cedula" placeholder="CEDULA" ></input>

                    <input onChange={handleOnChange} type="number" id="login" className="fadeIn second" name="telefono" placeholder="TELEFONO" ></input>

                    <input onChange={handleOnChange} type="text" id="login" className="fadeIn second" name="correo" placeholder="CORREO ELECTRONICO" ></input>

                    <select id="sangre">
                    <option value="" disabled selected hidden>TIPO DE SANGRE</option>
                        <option value='Masculino'>TIPO A</option>
                        <option value='Femenino'>TIPO B</option>
                        <option value='Otro'>TIPO AB</option>
                        <option value='Otro'>TIPO O</option>
                    </select>

                    <select id="genero">
                    <option value="" disabled selected hidden>GENERO</option>
                        <option value='Masculino'>Masculino</option>
                        <option value='Femenino'>Femenino</option>
                        <option value='Otro'>Otro</option>
                    </select>

                    <input type="datetime-local" name="cumpleanos"></input>
        
                    <select id="membresia">
                    <option value="" disabled selected hidden>MEMBRESIA</option>
                        <option value='Semana'>Semana</option>
                        <option value='Quincena'>Quincena</option>
                        <option value='Mensualidad Estudiante'>Mensualidad Estudiante</option>
                        <option value='Mensualidad'>Mensualidad</option>
                    </select>

                    <textarea rows='5' cols="100" placeholder="COMENTARIOS">
                        
                    </textarea>

                </form>
                <Link to={'/dashboard/clientes'} id="submit" onClick={()=> guardarCliente()} className="btn btn-dark" >Save</Link>
            </div>
        </div>
    </React.Fragment>

    );
}

export default AgregarClientes;