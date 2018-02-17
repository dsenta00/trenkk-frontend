import React, {Component} from 'react';
import '../style/App.css';
import '../style/navigation.css';
import Register from './Register.js';
import Login from './Login.js';
import Dashboard from './Navigation.js';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class login extends Component {
    render() {
        return (
                <Router>
                    <div>
                            <Route exact path="/" component={Login}/>
                            <Route exact path="/registration" component={Register}/>
                            <Route exact path="/dashboard" component={Dashboard}/>
                    </div>
                </Router>
        );
    }
}

export default login;
