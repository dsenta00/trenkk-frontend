import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';

class login extends Component {
    render() {
        return (
            <div className="login text-center">
                <header className="login-header">
                    <img src={logo} className="login-logo" alt="logo"/>
                    <h2>To log in, please fill out the form below</h2>
                    <form className="login-form" action="/dashboard.html">
                        <input className="input" type="text" name="email" placeholder="Email"/>
                        <input className="input" type="password" name="password" placeholder="Password"/>
                        <input className="button" type="submit" value="Login"/>
                    </form>
                    <p>
                        Not registered yet? Register <a href="#">here</a>
                    </p>
                </header>
            </div>
        );
    }
}

export default login;
