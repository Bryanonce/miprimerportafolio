import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import css
import './Dashboard.css';
//import config
import {env_url} from '../../config/enviroments';

export const Dashboard = ()=>{
    const [id, setId] = useState(0);
    const [proyectos, setProyectos] = useState();
    useEffect(()=>{
        //axios.get(`${env_url}/projects/search/`)
    },[id])
    return (
        <div className="login gradiente h-100">
            <div className="container h-100">
                <div className="dash-container">
                    <div className="entradas">
                        <h3>Entradas</h3>

                    </div>
                    <div className="entradas">
                        <h3>Tecnologias</h3>
                        <div className="content-row">
                            <div className="row content-entradas">
                                <label>Nombre</label>
                                <input type="text" name="name" />
                                <label>Tipo</label>
                                <select name="type" defaultValue="DEFAULT">
                                    <option value="DEFAULT" disabled>{'<--Seleccione Stack-->'}</option>
                                    <option value="FRONTEND">
                                        Frontend
                                    </option>
                                    <option value="BACKEND">
                                        Backend
                                    </option>
                                </select>
                                <label>Descripción</label>
                                <textarea name="description"></textarea>
                                <label>Imagen</label>
                                <input type="text" />
                            </div>
                            <div className="row content-entradas botonera">
                                <select name="type" defaultValue="DEFAULT">
                                    <option value="DEFAULT" disabled>{'<--Seleccione Stack-->'}</option>
                                    <option value="FRONTEND">
                                        Frontend
                                    </option>
                                    <option value="BACKEND">
                                        Backend
                                    </option>
                                </select>
                                <button>Nuevo</button>
                                <button>Editar</button>
                                <button>Eliminar</button>
                                <div className="direccion">
                                    <button>{'<<'}</button>
                                    <button>{'<'}</button>
                                    <button>{'>'}</button>
                                    <button>{'>>'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="entradas">
                        <h3>Proyectos</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}