import React, {Component} from 'react';
import '../style/App.css';
import '../style/dashboard.css';
import infoGraph from '../media/images/info-graph.png';
import {
    Route,
    Link
} from 'react-router-dom'

class Dashboard extends Component {
    render() {
        return (
            <div id="dashboard">
                <h2 className="page-title">Dashboard</h2>
                <hr className="header-line"/>

                <div className="dashboard-info text-center">
                    <div className="info">
                        <p>40 workouts completed</p>
                    </div>
                    <div className="info">
                        <p>10 kilograms lost</p>
                    </div>
                    <div className="info">
                        <p>12 months membership</p>
                    </div>
                </div>

                <div className="graph-info">
                    <br/>
                    <h3 className="subtitle">Your progress this month:</h3>
                    <img src={infoGraph} className="info-graph" alt="info-graph"/>
                </div>

            </div>
        );
    }
}

export default Dashboard;