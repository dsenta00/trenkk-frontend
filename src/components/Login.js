import React, {Component} from 'react';
import logo from '../media/images/logo.png';
import '../style/App.css';
import Register from './Register.js';
import {
    Route,
    Link
} from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className="login text-center">
                <header className="login-header">
                    <img src={logo} className="login-logo" alt="logo"/>
                    <form className="login-form" action="/dashboard" method="get" id="Dashboard">
                        <input className="input" type="email" name="email" placeholder="Email" required={true}/>
                        <input className="input" type="password" name="password" placeholder="Password"
                               required={true}/>
                        <input className="button" type="submit" value="Login"/>
                    </form>
                    <p id="registration-link">
                        Not a member yet? <Link to="/registration">Register</Link>
                        <Route exact path="/registration" component={Register}/>
                    </p>
                </header>
            </div>
        );
    }
}

export default Login;