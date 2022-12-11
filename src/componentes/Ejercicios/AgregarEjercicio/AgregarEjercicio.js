import React, { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgregarEjercicio.css';
import {Link} from 'react-router-dom';

function AgregarEjercicio() {

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
                    <h4 className='title'>Agregar nuevo ejercicio</h4>
                </div>
                <form id='formLogin'>
                    <input onChange={handleOnChange} type="text" id="login" className="fadeIn second" name="nombreCompleto" placeholder="NOMBRE DEL EJERCICIO" ></input>

                    <input onChange={handleOnChange} type="text" id="login" className="fadeIn second" name="correo" placeholder="URL" ></input>

                    <select id="sangre">
                    <option value="" disabled selected hidden>CATEGORIA</option>
                        <option value='Masculino'>Pecho</option>
                        <option value='Femenino'>Espalda</option>
                        <option value='Otro'>Biceps</option>
                        <option value='Otro'>Triceps</option>
                        <option value='Otro'>Hombros</option>
                        <option value='Otro'>Piernas</option>
                        <option value='Otro'>Cardio</option>
                    </select>

                </form>
                <Link to={'/dashboard/ejercicios'} id="submit" onClick={()=> guardarCliente()} className="btn btn-dark" >Save</Link>
            </div>
        </div>
    </React.Fragment>

    );
}

export default AgregarEjercicio;