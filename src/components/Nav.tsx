import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Comida
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              setShow(!show);
            }}
           
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${show && "show"} `}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/platos" className="nav-link">
                  Platos
                </Link>
              </li>
              <li>
                <Link to="/category" className="nav-link">
                  Categorias
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}
