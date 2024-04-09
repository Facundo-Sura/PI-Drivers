import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="titulo">
        <h1>Bienvenido al exitante mundo de las carreras</h1>
      </div>
      <div className="boton">
        <Link to='/home'>
          <button>Empieza!</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
