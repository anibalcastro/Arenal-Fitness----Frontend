import React from 'react';

export default function Articulos() {
    //Articulos que el cliente quiera adquirir.
    //Generar lista de articulos.
    return (
        <React.Fragment>
            <div className='container'>
                <form className='fArticulos'>
                <div className='jumbotron'>
                <h1>Informacion servicios:</h1>
                </div>
                    <select className='sA'>
                        <option>Mensualidad Completa</option>
                        <option>Sesion</option>
                        <option>Quincena</option>
                    </select>

                    <input type="text" placeholder='Nombre del producto' disabled='false'></input>
                    <input type='text' placeholder='Precio por unidad' disabled='false'></input>
                    <input type="number" placeholder='Cantidad'></input>
                    <input type='text' placeholder='Precio total:'></input>
                    <div className='container botones'>
                        <input type='button' id='btnAgregar' className='btn btn-danger' value='Agregar'></input>
                        <input type='button' id='btnCancelar' className='btn btn-success' value='Cancelar'></input>
                    </div>
                </form>
            </div>

        </React.Fragment>
    )
}