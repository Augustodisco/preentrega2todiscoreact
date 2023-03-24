import React from "react";
import '../navbar/navbar.css';
import CartWidget from "../CartWidget";

export const NavBar = () => {
    return(
    
            <nav>
                <ul>
                    <li><b>Home de Proyectos</b></li>
                    <li><a href="pages/contacto.html">Contacto</a></li>
                    <li><a href="pages/quiensoy.html">¿Quien soy?</a></li>
                    <li><a href="login.html"> Logueate </a></li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
    
        
    );
    
}

export default NavBar;