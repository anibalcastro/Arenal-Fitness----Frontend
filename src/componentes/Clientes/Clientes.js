import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Clientes.css';
import { Link } from 'react-router-dom';
import Filtro from '../FiltroClientes/FiltroClientes'


function Clientes() {

    let contador = 0;
    const [clientes, setClientes] = useState([]);
    let array = [
        { id: 1, nombreCompleto: "Fabricio Castro Ponce", cedula: "204310766", tipoMembresia: "Mensualidad Completa", fechaPago: "02/09/2022" },
        { id: 2, nombreCompleto: "Massiel Ponce Chavarria", cedula: "603030996", tipoMembresia: "Mensualidad Completa", fechaPago: "03/09/2022" },
        { id: 3, nombreCompleto: "Allison Brenes Ledezma", cedula: "208410305", tipoMembresia: "Mensualidad Completa", fechaPago: "07/09/2022" },
        { id: 4, nombreCompleto: "Alonda Jimenez Blanco", cedula: "502020330", tipoMembresia: "Mensualidad Completa", fechaPago: "09/09/2022" },
        { id: 5, nombreCompleto: "Rolbin Cruz Arguello", cedula: "201110222", tipoMembresia: "Mensualidad Completa", fechaPago: "10/09/2022" },
        { id: 6, nombreCompleto: "Oscar Villegas Castro", cedula: "115003336", tipoMembresia: "Mensualidad Completa", fechaPago: "11/09/2022" },
        { id: 7, nombreCompleto: "Nicol Mora Mora", cedula: "205520669", tipoMembresia: "Mensualidad Completa", fechaPago: "15/09/2022" },
        { id: 8, nombreCompleto: "Betty Ortega Miranda", cedula: "208850225", tipoMembresia: "Quincena", fechaPago: "30/09/2022" }
    ]

    useEffect(() => {
        //Set title
        document.title = 'Arenal Fitness - Clientes';
        llenarLista();

    }, []);

    const sumarContador = () => {
        contador = contador + 1
        return contador;
    }

    const llenarLista = () => {
        setClientes(array);
    }

    //Set albums 
    const setClientesFilter = (arrayFilter) => {
        const indefinido = undefined;
        const arreglo = indefinido || arrayFilter;
        if (arreglo[0] === false) {
            llenarLista();
        }
        else {
            setClientes(arrayFilter);
        }
    }

    const eliminarCliente = (id) => {
        let eliminar = window.confirm("Quieres eliminar el cliente?");
        console.log(eliminar);

        if(eliminar === true){
            alert('Se ha eliminado el cliente')
        }

    }

    return (
        <React.Fragment>
            <div className="container">
                <div id='contHeader' className="jumbotron">
                    <h1>Clientes</h1>
                </div>
            </div>

            <Filtro setArray={setClientesFilter} />

            <div id='newAlbum'>
                <Link to={'/dashboard/clientes/agregar'} className='btn btn-dark'>Agregar Cliente</Link>
            </div>

            {

                clientes[0] ? <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Membresia</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((clients) => (
                            sumarContador(),

                            <tr key={clients._id}>

                                <th scope="row">{contador}</th>
                                <td ><Link id='title-table' to={'/dashboard/clientes/detallecliente'}>{clients.nombreCompleto}</Link></td>
                                <td>
                                    {clients.tipoMembresia}
                                </td>
                                <td className='acciones'>
                                    <Link to={'/dashboard/clientes/editar'} className="btn btn-success">Editar</Link>
                                    <Link to={'/dashboard/clientes'} onClick={() => eliminarCliente(clients.id)} className="btn btn-danger">Eliminar</Link>
                                    <Link to={'/dashboard'} className="btn btn-dark">Pagar Mensualidad</Link>
                                    <Link to={'/dashboard/clientes/asignarRutina'} className="btn btn-dark" >Asignar Rutina</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <div className='loading'> <h4>Loading...</h4> </div>
            }
        </React.Fragment>
    )
}

export default Clientes;