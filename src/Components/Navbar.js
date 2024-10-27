import React from "react";
// import ReactDom from 'react-dom/client';
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg=-body-tertiary navbar-">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/About">
                About
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Detailbox">
                  Detailedbox
                </a>
              </li>
            </ul>
            <div class="form-check form-switch">
  <input  onClick={props.togglestyle} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div>
          </div>
        </div>
      </nav>

  
            </>
  );
}
