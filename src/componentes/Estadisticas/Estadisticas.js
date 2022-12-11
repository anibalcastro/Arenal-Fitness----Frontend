import React, { useEffect } from 'react';
import "./Estadisticas.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PieChart } from 'react-chartkick'
import 'chartkick/chart.js'




function Estadisticas() {

    useEffect(() => {
        //Set title
        document.title = 'Arenal Fitness - Inicio';

    }, []);

    return (
        <React.Fragment>
            <div className='container contenedor'>
                <h1>Estadisticas Arenal Fitness GYM</h1>
                <div>
                <h3>Grafico relacionado a clientes activos - inactivos</h3>
                <PieChart className='grafico' data={[["Clientes Activos", 300], ["Clientes Inactivos", 50]]} />

                <h3>Total de clientes: <strong>350 clientes</strong></h3>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Estadisticas;
