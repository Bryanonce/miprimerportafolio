import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {PrivateRoute} from '../../router/PrivateRouter';
import { Entradas } from './Entradas';
import { Proyectos } from './Proyectos';
import { Tecnologias } from './Tecnologias';

export const DashSwitch = ()=>{
    return (
            <Switch>
                <PrivateRoute 
                    exact
                    path="/entr"
                    component={Entradas}
                    redir="/login"
                />
                <PrivateRoute 
                    exact
                    path="/proj"
                    component={Proyectos}
                    redir="/login"
                />
                <PrivateRoute 
                    exact
                    path="/tech"
                    component={Tecnologias}
                    redir="/login"
                />
            </Switch>
    );
}