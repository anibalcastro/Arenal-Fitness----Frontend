import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaFacebook, FaGoogle, FaYoutube, FaMapSigns, FaInstagramSquare, FaInstagram } from 'react-icons/fa';

//import {  } from '@fortawesome/free-solid-svg-icons'


function Footer() {

    return (
        <React.Fragment >
            <footer className="text-center text-lg-start" >
                <div id='contCopyright' className="text-center text-white p-3">
                    © 2022 Copyright: Arenal Fitness GYM
                </div>
            </footer>
        </React.Fragment>);
}

export default Footer;