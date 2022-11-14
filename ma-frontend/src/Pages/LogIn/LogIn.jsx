import React, { Component } from 'react';
import './LogIn.css';
import Logo from "../../Images/Logo.png";

class LogIn extends Component {
    render() {
        return (
            <div className='login-fullpage'>
                <div className='login-flex'>
                    <img src={Logo} alt='logo' style={{height: '100px', width: '100px'}} />
                    <h1>Log in</h1>
                    <form className='login-form'>
                        <input type='email' name='email' placeholder='Email' /><br />
                        <input type='password' name='password' placeholder='Password' /><br />
                        <div className='login-column-wrapper'>
                            <a className='login-redirect-link' href='/signup'>Create account</a>
                            <button className='login-btn-submit' type='submit'>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LogIn;
