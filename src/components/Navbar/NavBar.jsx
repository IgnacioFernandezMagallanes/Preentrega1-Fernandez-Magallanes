import React from "react";
import NavbarItem from "./NavbarItem";
import CartWidget from "../CartWidget";



const NavBar = (props) => {

  const items=["Inicio", "Categorias", "Nosotros", "Contacto"]

  return (
    <nav className={props.className || "navbar navbar-expand-lg navbar-light bg-primary" }>
      <div className="container-fluid">
        <p className={props.navbarLogoCss || "navbar-brand"} href="#">
          {props.navbarLogo}
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" >
            {items.map((texto, index) => (
              <NavbarItem key={index} texto={texto}/>
            ))}
          </ul>
          <CartWidget cantidad="3"/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
