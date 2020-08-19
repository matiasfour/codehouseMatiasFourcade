import React, { Component } from 'react';
import './styles/navbar.css'
class NavBar extends Component {
    render() {
        return (
            <div className="navbar"> 
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Contacto</li>
                        <li>Productos</li>
                    </ul>
                </nav>

               
            </div>
        );
    }
}

export default NavBar;
