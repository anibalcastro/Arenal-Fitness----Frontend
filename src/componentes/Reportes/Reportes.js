import React, { useEffect } from 'react';
import "./Reportes.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart, PieChart, AreaChart } from 'react-chartkick'
import 'chartkick/chart.js'




function Reportes() {

    useEffect(() => {
        //Set title
        document.title = 'Arenal Fitness - Inicio';

    }, []);

    return (
        <React.Fragment>
            <div className='container contenedor'>
                <h1>Estadisticas Arenal Fitness GYM</h1>
                <div className='container'>
                    <h3>Grafico relacionado a clientes activos - inactivos</h3>
                    <PieChart className='grafico' data={[["Clientes Activos", 300], ["Clientes Inactivos", 50]]} />

                    <h3>Total de clientes: <strong>350 clientes</strong></h3>
                </div>

                <div className='lineaCompleta'></div>

                <div className='container'>
                    <h3>Ingresos del año 2022</h3>
                    <BarChart data={[["Enero", 1000000], ["Febrero", 2500000], ["Marzo", 2545000], ["Abril", 3504000], ["Mayo", 3450000], ["Junio", 4000000], ["Julio", 5000000], ["Agosto", 1250000], ["Setiembre", 0], ["Octubre", 0], ["Noviembre", 0], ["Diciembre", 0]]} />

                    <h3>Ingresos totales <strong>23.249.000,00 colones</strong></h3>
                </div>

                <div className='lineaCompleta'></div>

                <div className='container'>
                    <h3>Productos mas vendidos del 2022</h3>
                    <AreaChart data={{ "Mensualidad": 150, "NitroTech Whey Gold": 50, "Mensualidad Estudiante": 25, "Sesion Nacional": 24, "Sesion Extranjero": 25, "Quincena": 20 }} />
                </div>


            </div>


        </React.Fragment>
    );
}

export default Reportes;
