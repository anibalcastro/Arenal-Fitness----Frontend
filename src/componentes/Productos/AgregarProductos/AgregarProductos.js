import React, { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgregarProductos.css';
import { Link } from 'react-router-dom';

function AgregarProducto() {

    const [idUser, setIdUser] = useState(''); //Id usuario logueado
    const [inputValues, setInputValues] = useState({
        productName: '', cantidad: '', precio: '', url: ''
    }); //album name and description

    //Cualquier cambio, se guarde en el estado
    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }); // capture inputs

    // function to save Album in DB
    const guardarProducto = () => {
        let addProduct =
        {
            idUser: "1", //CAMBIAR POR ID USUARIO
            Nombre: inputValues.productName,
            Cantidad: inputValues.cantidad,
            precio: inputValues.precio,
            url: inputValues.url
        }

    }


    return (
        <React.Fragment>

            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h4 className='title'>Agregar nuevo producto</h4>
                    </div>
                    <form id='formLogin'>
                        <input onChange={handleOnChange} type="text" id="login" className="fadeIn second" name="productName" placeholder="NOMBRE DEL PRODUCTO" ></input>

                        <input onChange={handleOnChange} type="number" id="login" className="fadeIn second" name="cantidad" placeholder="CANTIDAD" ></input>

                        <input onChange={handleOnChange} type="number" id="login" className="fadeIn second" name="precio" placeholder="PRECIO POR UNIDAD" ></input>

                        <input onChange={handleOnChange} type="text" id="login" className="fadeIn second" name="url" placeholder="URL" ></input>


                        <textarea rows='5' cols="100" placeholder="DESCRIPCION">

                        </textarea>

                    </form>
                    <Link to={'/dashboard/productos'} id="submit" onClick={() => guardarProducto()} className="btn btn-dark" >Save</Link>
                </div>
            </div>
        </React.Fragment>

    );
}

export default AgregarProducto;