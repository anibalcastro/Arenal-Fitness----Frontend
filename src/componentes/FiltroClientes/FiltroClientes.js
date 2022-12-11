import React, { useCallback, useState, useEffect } from 'react';
import './FiltroClientes.css';

export default function Filter(props) {

    //Se guarda el estado.
    const [inputValues, setInputValues] = useState({ filter: '' });
    const [clientes, setClientes] = useState([]);
    let array = [
        {id: 1, nombreCompleto: "Fabricio Castro Ponce", cedula: "204310766", tipoMembresia:"Mensualidad Completa", fechaPago: "02/09/2022"},
        {id: 2, nombreCompleto: "Massiel Ponce Chavarria", cedula: "603030996", tipoMembresia:"Mensualidad Completa", fechaPago: "03/09/2022"},
        {id: 3, nombreCompleto: "Allison Brenes Ledezma", cedula: "208410305", tipoMembresia:"Mensualidad Completa", fechaPago: "07/09/2022"},
        {id: 4, nombreCompleto: "Alonda Jimenez Blanco", cedula: "502020330", tipoMembresia:"Mensualidad Completa", fechaPago: "09/09/2022"},
        {id: 5, nombreCompleto: "Rolbin Cruz Arguello", cedula: "201110222", tipoMembresia:"Mensualidad Completa", fechaPago: "10/09/2022"},
        {id: 6, nombreCompleto: "Oscar Villegas Castro", cedula: "115003336", tipoMembresia:"Mensualidad Completa", fechaPago: "11/09/2022"},
        {id: 7, nombreCompleto: "Nicol Mora Mora", cedula: "205520669", tipoMembresia:"Mensualidad Completa", fechaPago: "15/09/2022"},
        {id: 8, nombreCompleto: "Betty Ortega Miranda", cedula: "208850225", tipoMembresia:"Quincena", fechaPago: "30/09/2022"}
    ]

    //Captura que lo que esta escribiendo.
    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
        const newArray = filtrar(event.target.value);
        props.setArray(newArray);
        //console.log(inputValues.filter);
        //console.log(albumFilter);
    });

    //Funcion para filtrar por un termino en especifico.
    const filtrar = (terminoBuscar) => {
        let resultadoBusqueda = clientes.filter((elemento) => {
            if (elemento.nombreCompleto.toString().includes(terminoBuscar)) {
                return elemento;
            }
        })
        console.log(resultadoBusqueda);
        props.setArray(resultadoBusqueda);
        console.log('resultadoBusqueda',resultadoBusqueda);
    }


    //useEffect
    useEffect(() => {
        //Set title
        document.title = 'ElBlog - Dashboard';
        setClientes(array);
    }, []);

    return (
        <React.Fragment>
            <form className='formFilter'>
                <input onChange={handleOnChange} type='text' className='filterInput' name='filter' placeholder='Buscar Cliente' ></input>
            </form>
        </React.Fragment>
    )
}