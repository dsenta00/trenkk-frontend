import React, {Component} from 'react';
import logo from './logo.png';


class Register extends Component {
     static render() {
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
                             <option value="male">Male</option>
                             <option value="female">Female</option>
                             <option value="other">Other</option>
                         </select>
                         <input className="button" type="submit" value="Register"/>
                     </form>
                 </header>
             </div>
        );
    }
}

export default Register;
