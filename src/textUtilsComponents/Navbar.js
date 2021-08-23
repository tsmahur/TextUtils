import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {
   return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
         <div className="container-fluid">
            <Link className="navbar-brand" to="/">TextUtils</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <Link className={`nav-link ${props.active==="home"?"active":""}`} aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link ${props.active==="about"?"active":""}`} to="/about">About Us</Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link ${props.active==="list"?"active":""}`} to="/list">List</Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link ${props.active==="form"?"active":""}`} to="/form">Form</Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link ${props.active==="todos"?"active":""}`} to="/todos">Todos</Link>
                  </li>
               </ul>
               <form className="d-flex">
                  {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-primary" type="submit">Search</button> */}
                  <div className="form-check form-switch">
                     <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                     <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'Light':'Dark'} Mode</label>
                  </div>
               </form>
            </div>
         </div>
      </nav>
   );
}


Navbar.propTypes = {
   aboutText: PropTypes.string,
   mode: PropTypes.string
}
Navbar.defaultProps = {
   aboutText: "About",
   mode: "light"
}