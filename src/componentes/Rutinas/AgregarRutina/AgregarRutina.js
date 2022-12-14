import React, { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function AgregarRutina() {

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
    const guardarRutina = () => {
        let addAlbum =
        {
            idUser: "62df6b2d29ac0cbc96b15b57", //CAMBIAR POR ID USUARIO
            albumName: inputValues.albumName,
            description: inputValues.description
        }

    }


    useEffect(() => {
        let date = new Date();
        let mes = date.getMonth() + 1;
        let fecha = date.getDate().toString() +'/'+ mes.toString() +'/'+ date.getFullYear().toString() +' '+ date.getHours()+':'+ date.getMinutes().toString() +':'+ date.getSeconds().toString();
        

        let inp = document.getElementById('date');
        inp.value = fecha;
      });

    return (
        <React.Fragment>

            <div id='divRutina' className="container d-flex justify-content-center align-items-start">
            <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <h4 className='title'>Informacion</h4>
                        </div>
                        <form id='formLogin'>
                            <input onChange={handleOnChange} type="text" id="login" className="fadeIn second" name="nombreCompleto" placeholder="TITULO" ></input>

                            <select id="cliente">
                                <option value="" disabled selected hidden>Cliente</option>
                                <option value='Masculino'>Fabricio Castro Ponce</option>
                                <option value='Femenino'>Allison Brenes</option>
                            </select>

                            <input onChange={handleOnChange} type="text" id="date" className="fadeIn second" name="date" placeholder="Fecha" value={'Hola mundo'} disabled></input>


                            <select id="categoria">
                                <option value="" disabled selected hidden>CATEGORIA</option>
                                <option value='Masculino'>Pecho</option>
                                <option value='Femenino'>Espalda</option>
                                <option value='Otro'>Biceps</option>
                                <option value='Otro'>Triceps</option>
                                <option value='Otro'>Hombros</option>
                                <option value='Otro'>Piernas</option>
                                <option value='Otro'>Cardio</option>
                            </select>

                            <select id="Ejercicios">
                                <option value="" disabled selected hidden>Ejercicios</option>
                                <option value='Masculino'>Press Banca</option>
                                <option value='Femenino'>Press Inclinado</option>
                            </select>

                            <Link to={'/dashboard/rutinas'} id="submit" onClick={() => guardarRutina()} className="btn btn-dark" >Buscar cliente</Link>
                        </form>
                    </div>
                </div>
                
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <h4 className='title'>Crear Rutina</h4>
                        </div>
                        <form id='formLogin'>
                            <textarea rows='10' cols="20" placeholder="COMENTARIOS">

                            </textarea>

                        </form>
                        <Link to={'/dashboard/rutinas'} id="submit" onClick={() => guardarRutina()} className="btn btn-dark" >Guardar</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default AgregarRutina;