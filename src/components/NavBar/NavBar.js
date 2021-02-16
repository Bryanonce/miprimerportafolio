import React from 'react';
//import css
import './NavBar.css'

export const NavBar = ()=>{
    return (
        <div className="navbar-container">
            <div className="logo">
                <p>Porta<span>folio</span></p>
            </div>
            <nav className="nav-bar">
                <a>Home</a>
                <a>Conocimietos</a>
                <a>Proyectos</a>
                <a>Sobre mi</a>
                <a>Contáctame</a>
            </nav>
        </div>
    );
}