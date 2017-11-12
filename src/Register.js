import React, {Component} from 'react';
import logo from './logo.png';


class Register extends Component {
     render() {
         return (
             <div className="login text-center">
                 <header className="login-header">
                     <img src={logo} className="login-logo" alt="logo"/>
                     <h2>To register, please fill out the form below</h2>
                     <form className="login-form" action="" method="post" id="Dashboard">
                         <input className="input" type="text" name="firstName" placeholder="First name" required={true}/>
                         <input className="input" type="text" name="lastName" placeholder="Last name" required={true}/>
                         <input className="input" type="email" name="email" placeholder="Email" required={true}/>
                         <select className="input" placeholder="Gender">
                             <option value="volvo">Male</option>
                             <option value="saab">Female</option>
                             <option value="mercedes">Other</option>
                         </select>
                         <input className="button" type="submit" value="Register"/>
                     </form>
                 </header>
             </div>
        );
    }
}

export default Register;
