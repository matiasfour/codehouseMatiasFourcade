import React, { Component } from 'react'
import './styles/home.css'


export default class Home extends Component {


    render() {
        return (
            <div className="home">
                <h1>Bienvenido {this.props.nombre}</h1>
            </div>
        )
    }
}
