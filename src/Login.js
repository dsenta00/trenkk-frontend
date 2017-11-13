import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';

class Login extends Component {
    static render() {
        return (
            <div className="login text-center">
                <header className="login-header">
                    <img src={logo} className="login-logo" alt="logo"/>
                    <h2>To log in, please fill out the form below</h2>
                    <form className="login-form" action="" method="post" id="Dashboard">
                        <input className="input" type="email" name="email" placeholder="Email" required={true}/>
                        <input className="input" type="password" name="password" placeholder="Password"
                               required={true}/>
                        <input className="button" type="submit" value="Login"/>
                    </form>
                </header>
            </div>
        );
    }
}

export default Login;
