import React, {Component} from 'react';
import '../style/App.css';
import '../style/memberships.css';
import {
    Route,
    Link
} from 'react-router-dom'

class Memberships extends Component {
    render() {
        return (
            <div id="memberships">
                <h2 className="page-title">Memberships</h2>
                <hr className="header-line"/>

                <div className="membership-info">
                    <table>
                        <tr>
                            <th>Membership Type</th>
                            <th>Price</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                        <tr>
                            <td>Twice a week</td>
                            <td>180,00 HRK</td>
                            <td>21.01.2012</td>
                            <td>21.02.2012</td>
                        </tr>
                        <tr>
                            <td>Twice a week</td>
                            <td>180,00 HRK</td>
                            <td>21.01.2012</td>
                            <td>21.02.2012</td>
                        </tr>
                        <tr>
                            <td>Twice a week</td>
                            <td>180,00 HRK</td>
                            <td>21.01.2012</td>
                            <td>21.02.2012</td>
                        </tr>
                        <tr>
                            <td>Twice a week</td>
                            <td>180,00 HRK</td>
                            <td>21.01.2012</td>
                            <td>21.02.2012</td>
                        </tr>
                        <tr>
                            <td>Twice a week</td>
                            <td>180,00 HRK</td>
                            <td>21.01.2012</td>
                            <td>21.02.2012</td>
                        </tr>
                        <tr>
                            <td>Twice a week</td>
                            <td>180,00 HRK</td>
                            <td>21.01.2012</td>
                            <td>21.02.2012</td>
                        </tr>
                        <tr>
                            <td>Twice a week</td>
                            <td>180,00 HRK</td>
                            <td>21.01.2012</td>
                            <td>21.02.2012</td>
                        </tr>
                        <tr>
                            <td>Twice a week</td>
                            <td>180,00 HRK</td>
                            <td>21.01.2012</td>
                            <td>21.02.2012</td>
                        </tr>
                        <tr>
                            <td>Twice a week</td>
                            <td>180,00 HRK</td>
                            <td>21.01.2012</td>
                            <td>21.02.2012</td>
                        </tr>
                        <tr>
                            <td>Twice a week</td>
                            <td>180,00 HRK</td>
                            <td>21.01.2012</td>
                            <td>21.02.2012</td>
                        </tr>
                    </table>
                </div>

            </div>
        );
    }
}

export default Memberships;