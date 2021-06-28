import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Firebase Covid-19</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/dataIndonesia">Indonesia</Link>
              <Link className="nav-item nav-link" to="/dataProvinsi">Provinsi</Link>
              <Link className="nav-link" to="/dataInternasional">Internasional</Link>
    </div>
  </div>
</div>
    );
};

export default NavBar;