import React, { useState } from 'react';
import './LogIn.css';
import Logo from '../../Images/Logo.png';
import LogInSuccessGIF from '../../Images/LogInSuccess.gif';
import axios from 'axios';

function LogIn({setIsLogged, isLogged}) {
    const [isError, setIsError] = useState('');
    const [message, setMessage] = useState('');
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    // function that sends a request to the server with the search term on body
    async function handleLogin(e) {
        if(e) e.preventDefault();
        setUser(previousState => {
            return {
                ...previousState,
                username: e.target[0].value,
                password: e.target[1].value,
            }
        });
        console.log(user.username);
        if (user.username !== '' && user.password !== '') {
            var request = {
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/login/',
                data: {
                    'username': user.username,
                    'password': user.password,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            };
            const response = await axios(request);
            if (response.data.HttpStatusCode === 200) {
                setIsError(false);
                setMessage('Success!');
                console.log(response.data.token);
                const userToken = response.data.token;
                localStorage.setItem('token', JSON.stringify(userToken));
                localStorage.setItem('username', JSON.stringify(user.username));
                setIsLogged(true);
                return;
            }
            if (response.data.HttpStatusCode !== 200) {
                setIsError(true);
                setMessage('Invalid Credentials');
                return;
            }
        }
    };

    return (
        <div className='login-fullpage'>
            {!isLogged && <div className='login-flex'>
                <img src={Logo} alt='logo' style={{height: '100px', width: '100px'}} />
                <h1>Log in</h1>
                {isError && <h1 className='login-error-msg'>{message}</h1>}
                <form className='login-form' onSubmit={(e)=>handleLogin(e)}>
                    <input type='text' name='username' placeholder='Username' /><br />
                    <input type='password' name='password' placeholder='Password' /><br />
                    <div className='login-column-wrapper'>
                        <a className='login-redirect-link' href='/signup'>Create account</a>
                        <button className='login-btn-submit' type='submit'>LOG IN</button>
                    </div>
                </form>
            </div>}
            {isLogged && <div className='login-success'>
                <h1 className='login-success-title'>Welcome back, {JSON.parse(localStorage.getItem('username'))}!</h1>
                <img className='login-success-gif' src={LogInSuccessGIF} alt='Login Success' />
            </div>}
        </div>
    );
}

export default LogIn;
