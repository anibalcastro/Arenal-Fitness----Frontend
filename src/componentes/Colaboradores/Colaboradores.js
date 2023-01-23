import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

function Colaboradores() {

    let contador = 0;
    const [colaboradores, setColaboradores] = useState([]);
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
        let colaborador = Array();

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:3014/api/users/employees", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                colaborador = result.data;
                setColaboradores(colaborador);
                //console.log(colaborador);
            })
            .catch(error => console.log('error', error));
    }


    const eliminarEmpleado = (idUser, fullName) => {
        Swal.fire({
            title: 'Eliminar',
            text: 'Quieres eliminar a ' + fullName + '?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText : 'Cancelar'
        }
        ).then((result) => {
            if (result.isConfirmed) {

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    "id": idUser
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:3014/api/users/delete", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        let message = result.message;

                        if (message === 'OK') {
                            Swal.fire({
                                title: 'Eliminado',
                                text: 'Se ha eliminado a ' + fullName,
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })
                        }
                        else {
                            Swal.fire({
                                title: 'Error',
                                text: 'Ha ocurridon un error',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            })
                        }
                    })
                    .catch(error => console.log('error', error));
            } else if (result.isDenied) {
                Swal.fire('Se ha cancelado', '', 'info')
            }
        })

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

                    colaboradores[0] ?
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
                                    {colaboradores.map((items) => (
                                        sumarContador(),

                                        <tr key={items._id}>

                                            <th scope="row">{contador}</th>
                                            <td><Link id='title-table' to={'/dashboard/colaboradores/detallecolaborador'}>{items.fullName}</Link></td>
                                            <td>
                                                {items.role}
                                            </td>
                                            <td className='acciones'>
                                                <Link to={'/dashboard/colaboradores/editar'} className="btn btn-success">Edit</Link>
                                                <Link to={'/dashboard/colaboradores'} onClick={() => eliminarEmpleado(items._id, items.fullName)} className="btn btn-danger">Delete</Link>
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