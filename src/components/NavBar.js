import React, { Component } from 'react';
import './styles/navbar.css'
import CartIcon from './CartIcon'
class NavBar extends Component {
    render() {
        return (
            <div className="navbar"> 
                <div className="logo">
                    <CartIcon/>
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
