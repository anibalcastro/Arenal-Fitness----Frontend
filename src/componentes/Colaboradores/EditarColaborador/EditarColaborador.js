import React, { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditarColaborador.css';
import {Link} from 'react-router-dom';

function EditarColaborador() {

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
                    <h4 className='title'>Agregar nuevo colaborador</h4>
                </div>
                <form id='formLogin'>
                    <input onChange={handleOnChange} type="text" id="login" className="fadeIn second" name="nombreCompleto" placeholder="NOMBRE COMPLETO" value='Gloriana Espinoza Mendez' ></input>

                    <input onChange={handleOnChange} type="number" id="login" className="fadeIn second" name="cedula" placeholder="CEDULA" value='204310766' ></input>

                    <input onChange={handleOnChange} type="number" id="login" className="fadeIn second" name="telefono" placeholder="SALARIO" value='450000'></input>


                    <select id="sangre">
                    <option value="" disabled selected hidden>Asignar Rol</option>
                        <option  selected value='Masculino'>Administrador</option>
                        <option value='Femenino'>Entrenador</option>
                        <option value='Otro'>Recepcionista</option>
                    </select>

                    <input type="datetime-local" name="cumpleanos" value='05/02/1980'></input>
        
                </form>
                <Link to={'/dashboard/colaboradores'} id="submit" onClick={()=> guardarCliente()} className="btn btn-dark" >Save</Link>
            </div>
        </div>
    </React.Fragment>

    );
}

export default EditarColaborador;