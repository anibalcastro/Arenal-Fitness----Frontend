import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DetalleProducto.css';
import Fabricio from 'C:/utnweb/web3/arenal-fitness/src/Images/FabricioC.jpeg';


export default function DetalleProducto() {

    useEffect(() => {
        //Set title
        document.title = 'Arenal Fitness - Detalle Clientes';

    }, []);

    return (
        <React.Fragment>
            <div id='fuente' class="container mt-5 mb-5">
                <div class="row no-gutters">
                    <div class="col-md-4 col-lg-4"><img src="http://s3.amazonaws.com/storage.wobiz.com/215/215895/images/Large/1654365949_4fc3ea04305209b5afad04d3f5f0aeef.215895.png" /></div>
                    <div class="col-md-8 col-lg-8">
                        <div class="d-flex flex-column">
                            <div class="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                                <h3 class="display-5">NITROTECH WHEY GOLD</h3><i class="fa fa-facebook"></i><i class="fa fa-google"></i><i class="fa fa-youtube-play"></i><i class="fa fa-dribbble"></i><i class="fa fa-linkedin"></i></div>
                            <div class="p-3 bg-black text-white">
                                <p className='descripcion'><bold>Nitro-Tech 100% Whey Gold</bold>, es una fórmula que mezcla proteína aislada y concentrada procedente del suero de leche pura con péptidos de suero. Se trata de una proteína de liberación ultrapura, que es absorbida y digerida de forma prácticamente inmediata por el organismo. Un producto ideal para tomar justo después del entrenamiento. La fórmula se ha obtenido utilizando una tecnología de filtración multifase en frío para que sea lo más pura posible y que tenga la menor cantidad posible de grasas, lactosa e impurezas.
                                </p>
                                <p>Cantidad disponible: 2</p>
                                <p>Precio: </p><h3>53.000</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}