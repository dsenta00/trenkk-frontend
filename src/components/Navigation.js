import React from 'react'
import logo from '../media/images/logo.png';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Memberships from "./Memberships";

const Navigation = () => (
    <Router>
        <div id="main">
            <div id="navigation">
                <img src={logo} className="navigation-logo" alt="logo"/>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/memberships">Memberships</Link></li>
                    <br/>
                    <br/>
                    <br/>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/memberships" component={Memberships}/>
        </div>
    </Router>
);

export default Navigation