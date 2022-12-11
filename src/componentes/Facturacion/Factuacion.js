import React from "react";
import Cliente from "./Cliente/Cliente";
import Articulos from "./Articulos/Articulos";
import './Facturacion.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Facturacion() {

    return (
        <React.Fragment>
            <div className="container">
            <Cliente />
            <hr/>
            <Articulos />
            </div>
        </React.Fragment>
    )
}