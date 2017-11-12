import React, {Component} from 'react';
import './App.css';
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
            <div>
                <Router>
                    <div>
                        <p id="login-link">
                            <Link to="/">Login</Link>
                            <Route exact path="/" component={Login}/>
                        </p>
                        <p id="registration-link">
                            <Link to="/registration">Register</Link>
                            <Route exact path="/registration" component={Register}/>
                        </p>
                        <p id="link-to-page">
                            <Link to="/dashboard">Go to page</Link>
                            <Route exact path="/dashboard" component={Dashboard}/>
                        </p>
                    </div>
                </Router>
            </div>
        );
    }
}

export default login;
