import React from 'react';
import {
    Link
} from 'react-router-dom';
//import css
import './NavBar.css';

export const NavBar = ()=>{
    return (
        <div className="navbar-container">
            <div className="logo">
                <p>Porta<span>folio</span></p>
            </div>
            <nav className="nav-bar">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/knows">Conocimietos</Link>
                <Link className="links" to="/login">Admin</Link>
            </nav>
        </div>
    );
}