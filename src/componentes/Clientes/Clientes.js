import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Clientes.css';
import { Link } from 'react-router-dom';
import Filtro from '../FiltroClientes/FiltroClientes'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Clientes() {

    let contador = 0;
    const [clientes, setClientes] = useState([]);

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
        let clientes = Array();

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:3014/api/users/clients", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                clientes = result.data;
                setClientes(clientes);
                console.log(clientes);
            })
            .catch(error => console.log('error', error));
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

        if (eliminar === true) {
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
            <div className='container d-flex justify-content-center align-items-center flex-row flex-wrap'>
                {
                    clientes[0] ?
                        clientes.map((clients) => (
                            < Card className='mx-2 my-2' style={{ width: '18rem' }}>
                                <Card.Img id='imgThumbnail' variant="top" className='img-thumbnail' src="https://t4.ftcdn.net/jpg/02/28/14/71/360_F_228147163_obAYUq4iyyKClS1hDyK358QTrRaNKdcy.jpg" />
                                <Card.Body>
                                    <Card.Title><strong>{clients.fullName}</strong></Card.Title>
                                    <Card.Text>
                                        <strong>Membresia: </strong>{clients.membership}
                                        <br />
                                        <strong>Vencimiento: </strong>{new Date(clients.expirationMembership).toLocaleDateString()}
                                    </Card.Text>
                                    <Button className='btn btn-dark' variant="primary">Observar</Button>
                                </Card.Body>
                            </Card>
                        )) : 'No se encontraron...'
                }
            </div>
        </React.Fragment >
    )
}

export default Clientes;