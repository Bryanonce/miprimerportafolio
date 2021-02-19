import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
//import components
import { Dashboard } from '../components/dashboard/Dashboard';
import {Home} from '../components/home/Home';
import { Knowledge } from '../components/knowledge/Knowledge';
import { Login } from '../components/login/Login';
import { NavBar } from '../components/NavBar/NavBar';
import { AuthState } from '../contexts/authContext/AuthState';
import { PrivateRoute } from './PrivateRouter';

export const Routes = ()=>{
    return (
        <Router>
            <div className="h-100">
                <NavBar />
                <Switch>
                    <Route 
                        exact
                        path='/'
                        component={Home}
                    />
                    <Route 
                        exact
                        path="/knows"
                        component={Knowledge}
                    />
                    <AuthState>
                        <PrivateRoute 
                            exact
                            path="/login"
                            component={Login}
                            redir="/dash"
                        />
                        <PrivateRoute 
                            exact
                            path="/dash"
                            component={Dashboard}
                            redir="/login"
                        />
                    </AuthState>
                    
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
}