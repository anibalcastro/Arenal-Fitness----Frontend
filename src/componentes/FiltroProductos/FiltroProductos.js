import React, { useCallback, useState, useEffect } from 'react';
import './FiltroProducto.css';

export default function Filter(props) {

    //Se guarda el estado.
    const [inputValues, setInputValues] = useState({ filter: '' });
    const [productos, setProductos] = useState([]);
   
    let array = [
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
        let resultadoBusqueda = productos.filter((elemento) => {
            if (elemento.nombreProducto.toString().includes(terminoBuscar)) {
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
        setProductos(array);
    }, []);

    return (
        <React.Fragment>
            <form className='formFilter'>
                <input onChange={handleOnChange} type='text' className='filterInput' name='filter' placeholder='Buscar Producto' ></input>
            </form>
        </React.Fragment>
    )
}