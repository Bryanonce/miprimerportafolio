import {Redirect, Route} from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/authContext/AuthContext';

export const PrivateRoute = ({
    redir,
    component: Component,
    ...rest
})=>{
    const {isloged} = useContext(AuthContext);
    return (
        <Route 
            {...rest}
            render={(props)=>{
                return ((redir==='/dash')? !isloged: isloged )? <Component {...props} /> : <Redirect to={redir} />
            }}
        />
    );
}