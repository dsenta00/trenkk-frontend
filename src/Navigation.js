import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Navigation = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/memberships">Memberships</Link></li>
            </ul>

            <hr/>

            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/memberships" component={Memberships}/>
        </div>
    </Router>
);

const Dashboard = () => (
    <div>
        <h2>Dashboard</h2>
    </div>
);

const Profile = () => (
    <div>
        <h2>Profile</h2>
    </div>
);

const Memberships = ({match}) => (
    <div>
        <h2>Memberships</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
);

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

export default Navigation