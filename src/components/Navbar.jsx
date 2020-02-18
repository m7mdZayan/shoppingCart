import React from "react";

const Navbar = props => (
  <nav className="navbar navbar-dark bg-dark mb-4 px-5">
    <p className="navbar-brand mb-0 h1">
      product types
      <span className="mx-3 badge badge-pill badge-secondary">
        {props.countersArr}
      </span>
    </p>
  </nav>
);
export default Navbar;
