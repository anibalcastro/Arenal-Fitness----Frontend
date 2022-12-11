import React, { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditarProducto.css';
import { Link } from 'react-router-dom';

function EditarProduct() {

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
    const editarProducto = () => {
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
                        <input onChange={handleOnChange} type="text" id="login" className="fadeIn second" name="productName" placeholder="NOMBRE DEL PRODUCTO" value="NitroTech Whey Gold"></input>

                        <input onChange={handleOnChange} type="number" id="login" className="fadeIn second" name="cantidad" placeholder="CANTIDAD" value="2" ></input>

                        <input onChange={handleOnChange} type="number" id="login" className="fadeIn second" name="precio" placeholder="PRECIO POR UNIDAD" value="53.000" ></input>

                        <input onChange={handleOnChange} type="text" id="login" className="fadeIn second" name="url" placeholder="URL" value="http://s3.amazonaws.com/storage.wobiz.com/215/215895/images/Large/1654365949_4fc3ea04305209b5afad04d3f5f0aeef.215895.png"></input>


                        <textarea rows='5' cols="100" placeholder="DESCRIPCION" value="Nitro-Tech 100% Whey Gold, es una fórmula que mezcla proteína aislada y concentrada procedente del suero de leche pura con péptidos de suero. Se trata de una proteína de liberación ultrapura, que es absorbida y digerida de forma prácticamente inmediata por el organismo. Un producto ideal para tomar justo después del entrenamiento. La fórmula se ha obtenido utilizando una tecnología de filtración multifase en frío para que sea lo más pura posible y que tenga la menor cantidad posible de grasas, lactosa e impurezas.">
                            
                        </textarea>

                    </form>
                    <Link to={'/dashboard/productos'} id="submit" onClick={() => editarProducto()} className="btn btn-dark" >Save</Link>
                </div>
            </div>
        </React.Fragment>

    );
}

export default EditarProduct;