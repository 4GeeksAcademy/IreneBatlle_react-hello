import React from "react";

const NavBar = (props) =>{
    return (
    <nav className="navbar navbar-expand-lg bg-success-subtle" >

        <div className="container-fluid">
          <a className="navbar-brand text-success-emphasis" style={{fontFamily:"monospace", fontSize:"40px"}}href="#"><b>Adopciones.com</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" >
            <ul className="navbar-nav" style={{marginLeft:'auto'}}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>)
};

export default NavBar;