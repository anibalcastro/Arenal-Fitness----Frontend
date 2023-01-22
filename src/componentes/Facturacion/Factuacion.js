import React, { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import FiltroClientes from '../FiltroClientes/FiltroClientes';
import FiltroProductos from '../FiltroProductos/FiltroProductos';


export default function Facturacion() {

    const [clientes, setClientes] = useState([]);
    const [productos, setProductos] = useState([]);
    const [idUser, setIdUser] = useState(''); //Id usuario logueado
    const [inputValues, setInputValues] = useState({
        albumName: '', description: ''
    });

    //Cualquier cambio, se guarde en el estado
    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }); // capture inputs

    let arrayProductos = [
        { id: 1, nombreProducto: "NitroTech Whey Gold", cantidad: "2", url: "http://s3.amazonaws.com/storage.wobiz.com/215/215895/images/Large/1654365949_4fc3ea04305209b5afad04d3f5f0aeef.215895.png", Precio: "55.000" },
        { id: 2, nombreProducto: "Botellas de agua", cantidad: "20", url: "https://aguafonsvitae.com/wp-content/uploads/2019/10/Pack.png", Precio: "1.000" },
        { id: 3, nombreProducto: "Amino-Energy", cantidad: "5", url: "https://suplementosags.com/wp-content/uploads/2019/08/Amino-Energy.png", Precio: "20.000" },
        { id: 4, nombreProducto: "SAN NATION - CREATINE", cantidad: "20", url: "https://sann.net/wp-content/uploads/2019/08/SAN_Perf-Creatine_60serv_Ver5_FV_600x600-600x600.png", Precio: "40.000" },
        { id: 5, nombreProducto: "C4", cantidad: "20", url: "https://aguafonsvitae.com/wp-content/uploads/2019/10/Pack.png", Precio: "35.000" },
        { id: 6, nombreProducto: "B-NOX PRE-WORKOUT", cantidad: "20", url: "http://cdn.shopify.com/s/files/1/0026/8078/2897/products/C4.png?v=1616406275", Precio: "40.000" },
        { id: 7, nombreProducto: "ISO 100 Proteina", cantidad: "10", url: "https://gnc.com.mx/media/catalog/product/cache/b669420cf3540aeb652e4ae3322c681d/1/4/141603873-dmz-iso-100-gourmet-van-5-lbs.png", Precio: "60.000" },
        { id: 8, nombreProducto: "Botellas ", cantidad: "20", url: "http://cdn.shopify.com/s/files/1/1099/1898/products/BlenderBottle_Insulated_Stainless_Steel_Protein_Shaker_Bottle_Black.png?v=1624985507", Precio: "10.000" },
        { id: 9, nombreProducto: "Mensualidad Regular", cantidad: "*", url: "#", Precio: "20.000" },
        { id: 9, nombreProducto: "Mensualidad Estudiante", cantidad: "*", url: "#", Precio: "18.000" },
    ]

    let arrayClientes = [
        { id: 1, nombreCompleto: "Fabricio Castro Ponce", cedula: "204310766", tipoMembresia: "Mensualidad Completa", fechaPago: "02/09/2022" },
        { id: 2, nombreCompleto: "Massiel Ponce Chavarria", cedula: "603030996", tipoMembresia: "Mensualidad Completa", fechaPago: "03/09/2022" },
        { id: 3, nombreCompleto: "Allison Brenes Ledezma", cedula: "208410305", tipoMembresia: "Mensualidad Completa", fechaPago: "07/09/2022" },
        { id: 4, nombreCompleto: "Alonda Jimenez Blanco", cedula: "502020330", tipoMembresia: "Mensualidad Completa", fechaPago: "09/09/2022" },
        { id: 5, nombreCompleto: "Rolbin Cruz Arguello", cedula: "201110222", tipoMembresia: "Mensualidad Completa", fechaPago: "10/09/2022" },
        { id: 6, nombreCompleto: "Oscar Villegas Castro", cedula: "115003336", tipoMembresia: "Mensualidad Completa", fechaPago: "11/09/2022" },
        { id: 7, nombreCompleto: "Nicol Mora Mora", cedula: "205520669", tipoMembresia: "Mensualidad Completa", fechaPago: "15/09/2022" },
        { id: 8, nombreCompleto: "Betty Ortega Miranda", cedula: "208850225", tipoMembresia: "Quincena", fechaPago: "30/09/2022" }
    ]

    //Set albums 
    const setClientesFilter = (arrayFilter) => {
        const indefinido = undefined;
        const arreglo = indefinido || arrayFilter;
        if (arreglo[0] === false) {
            setClientes(arrayClientes);
        }
        else {
            setClientes(arrayFilter);
        }
    }

    //Set albums 
    const setProductosFilter = (arrayFilter) => {
        const indefinido = undefined;
        const arreglo = indefinido || arrayFilter;

        if (arreglo[0] === false) {
            setProductos(arrayProductos);
        }
        else {
            setProductos(arrayFilter);
        }
    }

    const setDate = () => {
        var today = new Date();
        var day = today.getDate() + "";
        var month = (today.getMonth() + 1) + "";
        var year = today.getFullYear() + "";
        var hour = today.getHours() + "";
        var minutes = today.getMinutes() + "";
        var seconds = today.getSeconds() + "";

        day = checkZero(day);
        month = checkZero(month);
        year = checkZero(year);
        hour = checkZero(hour);
        minutes = checkZero(minutes);
        seconds = checkZero(seconds);

        let fecha = (day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds);
        let inp = document.getElementById('date');
        inp.value = fecha;
    }

    const checkZero = (data) => {
        if (data.length == 1) {
            data = "0" + data;
        }

        return data;
    }

    useEffect(() => {
        setDate();
        setClientes(arrayClientes);
        setProductos(arrayProductos);
    }, []);

    return (
        <React.Fragment>

            <div id='divFacturacion' className="container d-flex justify-content-center align-items-start">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <h4 className='title'>Datos del cliente</h4>
                        </div>
                        <form id='formUser'>
                            <FiltroClientes setArray={setClientesFilter} />
                            {
                                clientes[0] ?
                                    <select>
                                        <option value="" disabled selected hidden>Cliente</option>

                                        {clientes.map((clients) => (
                                            <option value={clients.id}>{clients.nombreCompleto}</option>
                                        ))}
                                    </select>
                                    :
                                    <option value="" disabled selected hidden>Clientes no encontrados</option>

                            }
                            <input onChange={handleOnChange} type="text" id="name" className='fadeIn second' name="name" placeholder='NOMBRE DEL CLIENTE' disabled></input>
                            <input onChange={handleOnChange} type="text" id="cedula" className='fadeIn second' name="cedula" placeholder='CEDULA' disabled></input>
                            <input onChange={handleOnChange} type="text" id="telefono" className='fadeIn second' name="telefono" placeholder='TELEFONO' disabled></input>
                            <input onChange={handleOnChange} type="text" id="email" className='fadeIn second' name="email" placeholder='EMAIL' disabled></input>

                            <input onChange={handleOnChange} type="text" id="date" className="fadeIn second" name="date" placeholder="Fecha" disabled></input>
                        </form>
                        <hr/>
                    </div>
                </div>

                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <h4 className='title'>Producto</h4>
                        </div>
                        {
                            <FiltroProductos setArray={setProductosFilter} />
                        }
                        <form id='formUser'>

                            {
                                productos[0] ?
                                    <select>
                                        <option value="" disabled selected hidden>Productos</option>

                                        {productos.map((items) => (
                                            <option value={items.id}>{items.nombreProducto}</option>
                                        ))}
                                    </select>
                                    :
                                    <select>
                                        <option value="" disabled selected hidden>Productos no encontrados</option>
                                    </select>

                            }

                            <input onChange={handleOnChange} type="text" id="name" className='fadeIn second' name="name" placeholder='NOMBRE DEL PRODUCTO' disabled></input>
                            <input onChange={handleOnChange} type="text" id="precio " className='fadeIn second' name="precio" placeholder='PRECIO' disabled></input>
                            <input onChange={handleOnChange} type="text" id="impuesto " className='fadeIn second' name="impuesto" placeholder='IMPUESTO' disabled></input>
                            <input onChange={handleOnChange} type="number" id="cantidad" className='fadeIn second' name="cantidad" placeholder='Cantidad'></input>

                            <input onChange={handleOnChange} type="text" id="montoTotal" className='fadeIn second' name="montoTotal" placeholder='MONTO TOTAL' disabled></input>

                            <div>
                                <button className='btn btn-success mx-2'>
                                    AGREGAR
                                </button>
                                <button className='btn btn-danger mx-2'>
                                    LIMPIAR
                                </button>

                            </div>

                            <hr />



                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mensualidad Regular</td>
                                        <td>20.000</td>
                                        <td><button id='prodDelete' className='btn btn-danger'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#000" d="M15 3a1 1 0 0 1 1 1h2a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2h2a1 1 0 0 1 1-1h6Z" /><path fill="#000" fill-rule="evenodd" d="M6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Zm3.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Zm5 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5Z" clip-rule="evenodd" /></svg>
                                        </button></td>
                                    </tr>
                                </tbody>
                            </table>

                            <hr/>

                            <button className='btn btn-dark mx-2'>
                                    ENVIAR FACTURA
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}