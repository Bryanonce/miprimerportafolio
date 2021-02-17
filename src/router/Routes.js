import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
//import components
import {Home} from '../components/home/Home';
import { Knowledge } from '../components/knowledge/Knowledge';
import { NavBar } from '../components/NavBar/NavBar';

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
                    <Route />
                </Switch>
            </div>
        </Router>
    );
}