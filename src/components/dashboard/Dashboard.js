import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext/AuthContext';
//import css
import './Dashboard.css';

export const Dashboard = ()=>{
    const {logout} = useContext(AuthContext);
    return (
                <div className="dash-container">
                   <nav>
                        <div className="nav-link"><Link to="/entr">Entradas</Link></div>
                        <div className="nav-link"><Link to="/proj">Proyectos</Link></div>
                        <div className="nav-link"><Link to="/tech">Tecnologías</Link></div>
                        <div className="nav-link log-out"> <a onClick={logout}>Log Out</a></div>
                   </nav>
                </div>
    );
}