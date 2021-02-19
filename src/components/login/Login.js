import React, { useContext } from 'react';
//import css
import './Login.css';
//import context
import {AuthContext} from '../../contexts/authContext/AuthContext';

export const Login = ()=>{
    const {form,handleInputChange,login} = useContext(AuthContext)
    const {email,password} = form
    return (
        <div className="login gradiente h-100">
            <div className="container h-100">
                <div className="login-container">
                    <div className="login-app">
                        <h3>Login</h3>
                        <div className="formulario">
                            <label>Usuario</label>
                            <input type="email" name="email" value={email} onChange={handleInputChange} />
                            <label>Password</label>
                            <input type="password" name="password" value={password} onChange={handleInputChange} />
                            <button onClick={login}>Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}