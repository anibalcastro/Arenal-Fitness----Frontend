import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Colaboradores() {

    let contador = 0;
    const [clientes, setClientes] = useState([]);
    let array = [
        { id: 1, nombreCompleto: "Gloriana Mendez Espinoza", cedula: "204310766", rol: "Entrenadora", fechaNacimineto: "02/09/1980", salario: "450.000,00" },
        { id: 2, nombreCompleto: "Edgardo Garrote ", cedula: "603030996", rol: "Entrenador", fechaNacimineto: "03/09/1992", salario: "450.000,00" },
        { id: 3, nombreCompleto: "Alosno Paniagua Garrote ", cedula: "205650333", rol: "Recepcionista", fechaNacimineto: "03/09/2000", salario: "450.000,00" },

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


    const eliminarCliente = (id) => {
        let eliminar = window.confirm("Quieres eliminar el colaborador?");
        console.log(eliminar);

        if (eliminar === true) {
            alert('Se ha eliminado el colaborador')
        }

    }

    return (
        <React.Fragment>
            <div className=''>
                <div id='contHeader' className="jumbotron">
                    <h1>Colaboradores</h1>
                </div>


                <div id='newColaborator' className='d-flex justify-content-end mx-5'>
                    <Link to={'/dashboard/colaboradores/agregar'} className='btn btn-dark'>Agregar Colaborador</Link>
                </div>

                {

                    clientes[0] ? 
                    <div className='table-responsive-md'> 
                        <table className="table my-5">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre Completo</th>

                                <th scope="col">Rol</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((clients) => (
                                sumarContador(),

                                <tr key={clients._id}>

                                    <th scope="row">{contador}</th>
                                    <td><Link  id='title-table' to={'/dashboard/colaboradores/detallecolaborador'}>{clients.nombreCompleto}</Link></td>
                                    <td>
                                        {clients.rol}
                                    </td>
                                    <td className='acciones'>
                                        <Link to={'/dashboard/colaboradores/editar'} className="btn btn-success">Edit</Link>
                                        <Link to={'/dashboard'} onClick={() => eliminarCliente(clients.id)} className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <hr />
                    </div>
                     : <div className='loading'> <h4>Loading...</h4> </div>
                }
            </div>


        </React.Fragment>
    )
}

export default Colaboradores;