import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
//import components
import {Home} from '../components/home/Home';
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
                    <Route />
                </Switch>
            </div>
        </Router>
    );
}