import React, {Component} from 'react';
import '../style/App.css';
import '../style/profile.css';
import {
    Route,
    Link
} from 'react-router-dom'

class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <h2 className="page-title">Profile</h2>
                <hr className="header-line"/>

                <div className="profile-info">
                    <h4 className="bold">First name: </h4><span>Miljenko</span>
                    <h4 className="bold">Last name: </h4><span>Miljenkić</span>
                    <h4 className="bold">Email: </h4><span>miljenko@miljen.co</span>
                    <h4 className="bold">Gender: </h4><span>Male</span>
                </div>

            </div>
        );
    }
}

export default Profile;