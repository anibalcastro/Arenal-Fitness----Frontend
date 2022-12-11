import React from 'react';

export default function Cliente() {
    //Filtro de cliente y toda la informacion del cliente.

    return (
        <React.Fragment>
            <div className="container">
                <form className="fCliente">
                    <div className='jumbotron'>
                    <h1>
                        Informacion del Cliente
                    </h1>
                    </div>
                    <input type='text' className="inpBuscar" placeholder="Filtrar Cliente"></input>

                    <select className='sClientes'>
                        <option>Anibal Castro</option>
                        <option>Fabricio Castro</option>
                        <option>Massiel Ponce</option>
                    </select>
                    <input type='text' placeholder="Nombre completo" disabled="false" required='true'></input>
                    <input type='text' placeholder="Cedula" disabled="false" required='true'></input>
                    <input type='text' placeholder="Correo Electronico" disabled="false" required="true"></input>
                </form>
            </div>
        </React.Fragment>
    )
}