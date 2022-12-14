import React, { useEffect } from "react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Glory from "C:/utnweb/web3/arenal-fitness/src/Images/Gloriana.jpg";
import Edgardo from "C:/utnweb/web3/arenal-fitness/src/Images/Edgardo.jpeg";
import Carousel from "../Carousel/CarouselController";

function Dashboard() {
  useEffect(() => {
    //Set title
    document.title = "Arenal Fitness - Inicio";
  }, []);

  return (
    <React.Fragment>
      <div className="container d-flex justify-content-center flex-column">
        <Carousel className="my-2"/>
        <hr/>
        <div className="container">
          <div className="container  d-flex align-items-center justify-content-center py-2">
          <h1>Entrenadores</h1>
          </div>
          
          <div className="container fotosEntrenadores">
            <img className="trainers mx-2" src={Glory} />
            <img className="trainers mx-2" src={Edgardo}  />
          </div>
        </div>

        <hr />

        <div className="contHorarios container">
          <h1>Horarios</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Dia</th>
                <th scope="col">Horario</th>
                <th scope="col">Clases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lunes</td>
                <td>5:30 am - 9:30 pm</td>
                <td>Funcionales - Zumba</td>
              </tr>

              <tr>
                <td>Martes</td>
                <td>5:30 am - 9:30 pm</td>
                <td>Funcionales - Boxeo</td>
              </tr>

              <tr>
                <td>Miercoles</td>
                <td>5:30 am - 9:30 pm</td>
                <td>Funcionales - MMA</td>
              </tr>

              <tr>
                <td>Jueves</td>
                <td>5:30 am - 9:30 pm</td>
                <td>Funcionales - Yoga</td>
              </tr>

              <tr>
                <td>Viernes</td>
                <td>5:30 am - 9:30 pm</td>
                <td>Funcionales - Spinning</td>
              </tr>

              <tr>
                <td>Sabado</td>
                <td>7:30 am - 2:30 pm</td>
                <td>Funcionales - Cardio</td>
              </tr>

              <tr>
                <td>Domingo</td>
                <td>CERRADO</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <div className="contTarifas container">
          <h1>Tarifas</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Membresia</th>
                <th scope="col">Monto</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sesion Nacional</td>
                <td>₡2.500</td>
                <td>1 dia</td>
              </tr>

              <tr>
                <td>Sesion Extranjero</td>
                <td>₡3.000</td>
                <td>1 dia</td>
              </tr>

              <tr>
                <td>Semana</td>
                <td>₡10.000</td>
                <td>7 dias</td>
              </tr>

              <tr>
                <td>Quincena</td>
                <td>₡14.000</td>
                <td>15 dias</td>
              </tr>

              <tr>
                <td>Mensualidad Estudiante</td>
                <td>₡18.000</td>
                <td>31 dias</td>
              </tr>

              <tr>
                <td>Mensualidad</td>
                <td>₡20.000</td>
                <td>31 dias</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
