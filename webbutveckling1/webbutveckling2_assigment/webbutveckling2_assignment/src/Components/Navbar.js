import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className='navbar'>
        <div className="navlink">
        <NavLink activeClassName="active" className="link" to="/">Biljettköp</NavLink>
        <NavLink className="link" to="/nyheter">Nyheter</NavLink>
            <NavLink className="link" to="/topplistor">Topplistor</NavLink>
            <NavLink className="link" to="/kontakt">Kontakt</NavLink>

    </div>
    </div>);
}

export default Navbar;