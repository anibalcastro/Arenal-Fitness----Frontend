import React from 'react'
import {Link} from 'react-router-dom';

const RestrictedAccess = () => {
    const styleContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "250px"
    }
  return (
    <React.Fragment>
         <div style={styleContainer} className="container">
                <h1>SEGUIMOS TRABAJANDO EN ELLO</h1>
                <Link className="btn btn-dark" to={'/dashboard'}>INICIO</Link>
            </div>
    </React.Fragment>
  )
}

export default RestrictedAccess