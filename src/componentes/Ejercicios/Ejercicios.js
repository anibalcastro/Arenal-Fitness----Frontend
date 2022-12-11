import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ejercicios.css';
import { Link } from 'react-router-dom';


function Ejercicios() {

    let contador = 0;
    const [productos, setProductos] = useState([]);
    let array = [
        { id: 1, nombreEjercicio: "Press Banca Barra", url: "https://www.youtube.com/watch?v=GeLq8cMODLc", Categoria: "Pecho" },
        { id: 2, nombreEjercicio: "Press Inclinado Mancuernas", url: "https://www.youtube.com/watch?v=GeLq8cMODLc", Categoria: "Pecho" },
        { id: 3, nombreEjercicio: "Fly Vertical", url: "https://www.youtube.com/watch?v=GeLq8cMODLc", Categoria: "Pecho" },
        { id: 4, nombreEjercicio: "Aperturas", url: "https://www.youtube.com/watch?v=GeLq8cMODLc", Categoria: "Pecho" },
        { id: 5, nombreEjercicio: "Push ups", url: "https://www.youtube.com/watch?v=GeLq8cMODLc", Categoria: "Pecho" },
        { id: 6, nombreEjercicio: "Press declinado mancuernas", url: "https://www.youtube.com/watch?v=GeLq8cMODLc", Categoria: "Pecho" },
        { id: 7, nombreEjercicio: "Press Banca Polea", url: "https://www.youtube.com/watch?v=GeLq8cMODLc", Categoria: "Pecho" },
        { id: 8, nombreEjercicio: "Press Inclinado polea", url: "https://www.youtube.com/watch?v=GeLq8cMODLc", Categoria: "Pecho" },
    ]

    useEffect(() => {
        //Set title
        document.title = 'Arenal Fitness - Productos';
        llenarLista();

    }, []);

    const sumarContador = () => {
        contador = contador + 1
        return contador;
    }

    const llenarLista = () => {
        setProductos(array);
    }



    const eliminarCliente = (id) => {
        let eliminar = window.confirm("Quieres eliminar el ejercicio?");
        console.log(eliminar);

        if (eliminar === true) {
            alert('Se ha eliminado el ejercicio');
        }

    }

    const abrirVideo = (url) => {
        window.open(url, "nuevo", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=400, height=400");
    }

    return (
        <React.Fragment>
            <div className='container'>
                <div className="productos container">
                    <div id='contHeader' className="jumbotron">
                        <h1>Ejercicios</h1>
                    </div>
                </div>


                <div id='newAlbum'>
                    <Link to={'/dashboard/ejercicios/agregar'} className='btn btn-dark'>Agregar Ejercicio</Link>
                </div>

                {

                    productos[0] ? <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Ejercicio</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((iterator) => (
                                sumarContador(),

                                <tr key={iterator.id}>

                                    <th scope="row">{contador}</th>
                                    <td ><Link id='title-table' to={'/dashboard/ejercicios'} onClick={() => abrirVideo(iterator.url)}>{iterator.nombreEjercicio}</Link></td>
                                    <td>
                                        {iterator.Categoria}
                                    </td>
                                    <td className='acciones'>
                                        <Link to={'/dashboard/ejercicios/editar'} className="btn btn-success">Edit</Link>
                                        <Link to={'/dashboard'} onClick={() => eliminarCliente(iterator.id)} className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table> : <div className='loading'> <h4>Loading...</h4> </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Ejercicios;