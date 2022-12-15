import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productos.css';
import { Link } from 'react-router-dom';
import Filtro from '../FiltroProductos/FiltroProductos';


function Productos() {

    let contador = 0;
    const [productos, setProductos] = useState([]);
    let array =  [
        { id: 1, nombreProducto: "NitroTech Whey Gold", cantidad: "2", url: "http://s3.amazonaws.com/storage.wobiz.com/215/215895/images/Large/1654365949_4fc3ea04305209b5afad04d3f5f0aeef.215895.png", Precio: "55.000" },
        { id: 2, nombreProducto: "Botellas de agua", cantidad: "20", url: "https://aguafonsvitae.com/wp-content/uploads/2019/10/Pack.png", Precio: "1.000" },
        { id: 3, nombreProducto: "Amino-Energy", cantidad: "5", url: "https://suplementosags.com/wp-content/uploads/2019/08/Amino-Energy.png", Precio: "20.000" },
        { id: 4, nombreProducto: "SAN NATION - CREATINE", cantidad: "20", url: "https://sann.net/wp-content/uploads/2019/08/SAN_Perf-Creatine_60serv_Ver5_FV_600x600-600x600.png", Precio: "40.000" },
        { id: 5, nombreProducto: "C4", cantidad: "20", url: "https://aguafonsvitae.com/wp-content/uploads/2019/10/Pack.png", Precio: "35.000" },
        { id: 6, nombreProducto: "B-NOX PRE-WORKOUT", cantidad: "20", url: "http://cdn.shopify.com/s/files/1/0026/8078/2897/products/C4.png?v=1616406275", Precio: "40.000" },
        { id: 7, nombreProducto: "ISO 100 Proteina", cantidad: "10", url: "https://gnc.com.mx/media/catalog/product/cache/b669420cf3540aeb652e4ae3322c681d/1/4/141603873-dmz-iso-100-gourmet-van-5-lbs.png", Precio: "60.000" },
        { id: 8, nombreProducto: "Botellas ", cantidad: "20", url: "http://cdn.shopify.com/s/files/1/1099/1898/products/BlenderBottle_Insulated_Stainless_Steel_Protein_Shaker_Bottle_Black.png?v=1624985507", Precio: "10.000" },
        { id: 9, nombreProducto: "Mensualidad Regular", cantidad: "-", url: "#", Precio: "20.000" },
        { id: 9, nombreProducto: "Mensualidad Estudiante", cantidad: "-", url: "#", Precio: "18.000" },
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

    //Set albums 
    const setProductosFilter = (arrayFilter) => {
        const indefinido = undefined;
        const arreglo = indefinido || arrayFilter;
        if (arreglo[0] === false) {
            llenarLista();
        }
        else {
            setProductos(arrayFilter);
        }
    }

    const eliminarCliente = (id) => {
        let eliminar = window.confirm("Quieres eliminar el Producto?");
        console.log(eliminar);

        if (eliminar === true) {
            alert('Se ha eliminado el producto');
        }

    }

    return (
        <React.Fragment>
            <div className="productos container">
                <div id='contHeader' className="jumbotron">
                    <h1>Productos</h1>
                </div>
            </div>

            {
                <Filtro setArray={setProductosFilter} />
            }

            <div id='newAlbum'>
                <Link to={'/dashboard/productos/agregar'} className='btn btn-dark'>Agregar Producto</Link>
            </div>

            {

                productos[0] ? <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre del Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((iterator) => (
                            sumarContador(),

                            <tr key={iterator.id}>

                                <th scope="row">{contador}</th>
                                <td ><Link id='title-table' to={'/dashboard/productos/detalleproducto'}>{iterator.nombreProducto}</Link></td>
                                <td>
                                    {iterator.cantidad}
                                </td>
                                <td>
                                    {iterator.Precio}
                                </td>
                                <td className='acciones'>
                                    <Link to={'/dashboard/productos/editar'} className="btn btn-success">Edit</Link>
                                    <Link to={'/dashboard'} onClick={() => eliminarCliente(iterator.id)} className="btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <div className='loading'> <h4>Loading...</h4> </div>
            }
        </React.Fragment>
    )
}

export default Productos;