import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'C:/utnweb/web3/arenal-fitness/src/Detalle.css';
import Gloriana from 'C:/utnweb/web3/arenal-fitness/src/Images/Gloriana.jpg';


export default function DetalleCliente() {

    useEffect(() => {
        //Set title
        document.title = 'Arenal Fitness - Detalle Clientes';

    }, []);

    return (
        <React.Fragment>
            <div id='fuente' class="container mt-5 mb-5">
            <div class="row no-gutters">
                <div class="col-md-4 col-lg-4"><img src={Gloriana}/></div>
                <div class="col-md-8 col-lg-8">
                    <div class="d-flex flex-column">
                        <div class="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                            <h3 class="display-5">Gloriana Mendez Espinoza</h3><i class="fa fa-facebook"></i><i class="fa fa-google"></i><i class="fa fa-youtube-play"></i><i class="fa fa-dribbble"></i><i class="fa fa-linkedin"></i></div>
                        <div class="p-3 bg-black text-white">
                            <p>Cedula: 202220222</p>
                            <p>Telefono: 85424471</p>
                            <p>Correo Electronico: glorymendez@gmail.com</p>
                            <p>Tipo de sangre: Tipo O+</p>
                            <p>Genero: Femenino</p>
                            <p>Fecha de Nacimiento: 13/10/1997</p>
                            <p>Fecha de inicio: 01/01/2015 </p>
                            <p>Salario: 325.000 </p>
                            <p>Rol: Entrenadora</p>
                            <p>Comentarios: Encargada de planta y clases funcionales</p>
                            <p></p>
                        </div>
    
                        </div>
                    </div>
                </div>
            </div>
       
        </React.Fragment>
    )
}