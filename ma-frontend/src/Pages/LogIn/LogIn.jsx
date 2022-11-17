import React, { Component, useState } from 'react';
import './LogIn.css';
import Logo from '../../Images/Logo.png';
import axios from 'axios';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // function that sends a request to the server with the search term on body
    async function handleLogin(e) {
        if(e) e.preventDefault();
        
        if (email !== '' && password !== '') {
            setEmail(e.target[0].value);
            setPassword(e.target[1].value);
            
            var request = {
                method: 'POST',
                url: 'http://127.0.0.1:8000/accounts/login/',
                data: {
                    'email': email,
                    'password': password,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            };
        }

    };

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

export default LogIn;
