import React from "react";
import { NavLink } from "react-router-dom";

const NavBar=()=>{
    return(
        <nav >
            <div class="container">
            <section>
           <a><p><NavLink to="/">Home</NavLink></p></a> 
           <a> <NavLink to="/about">Vedio-Player</NavLink>
            <p><NavLink to="/welcome">simpleCard</NavLink></p>
            <p><NavLink to="/weather">Weather</NavLink></p>
            <p><NavLink to="/contact">Quote</NavLink></p></a>
            </section>
</div>
        </nav>
    )
}
export default NavBar