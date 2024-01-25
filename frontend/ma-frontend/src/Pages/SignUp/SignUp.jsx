import React, { useState } from 'react';
import './SignUp.css';
import Logo from "../../Images/Logo.png";
import SteamLogo from "../../Images/SteamLogo.png";
import axios from 'axios';
import SignupSuccessGIF from '../../Images/SignupSuccess.gif';
import Loading from '../../Components/Loading/Loading';

function SignUp({setIsLogged, isLogged}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [steamUsername, setSteamUsername] = useState('');
    const [isError, setIsError] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState('');

    async function handleSignUp(e) {
        console.log(e);
        if(e) e.preventDefault();
        setFirstName(e.target[0].value);
        setLastName(e.target[1].value);
        setEmail(e.target[2].value);
        setUsername(e.target[3].value);
        setPassword(e.target[4].value);
        setPasswordConfirm(e.target[5].value);
        setSteamUsername(e.target[6].value);

        if (username !== '' && password !== '' && passwordConfirm !== '' && email !== '' && firstName !== '' && lastName !== '' && steamUsername !== '') {
            setIsLoading(true);
            var request = {
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/signup/',
                data: {
                    'first_name': firstName,
                    'last_name': lastName,
                    'email': email,
                    'username': username,
                    'password': password,
                    'steam_username': steamUsername,
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
                const userToken = response.data.token;
                localStorage.setItem('token', JSON.stringify(userToken));
                localStorage.setItem('username', JSON.stringify(username));
                setIsLogged(true);
                setIsLoading(false);
                return;
            }
            setIsLoading(false);
            if (response.data.HttpStatusCode !== 200) {
                setIsError(true);
                setMessage(response.data.message);
                return;
            }
        }
    };

    return (
        <div className='signup-fullpage'>
            {isLoading && <Loading isLoadingSteam={true} />}
            {!isLoading && !isLogged && <div className='signup-flex'>
                <img src={Logo} alt='logo' style={{height: '50px', width: '50px'}} />
                <h1>Create your account</h1>
                {isError && <h2 className='signup-error-msg'>{message}</h2>}
                <form className='signup-form' onSubmit={(e)=>handleSignUp(e)}>
                    <div className='signup-column-wrapper'>
                        <input type='text' name='firstname' placeholder='First Name' />
                        <input type='text' name='lastname' placeholder='Last Name' />
                    </div>
                    <div className='signup-column-wrapper'>
                        <input type='email' name='email' placeholder='Email' />
                        <input type='text' name='username' placeholder='Username' />
                    </div>
                    <p className='signup-obs'>You'll need to confirm that this email belongs to you</p>
                    <div className='signup-column-wrapper'>
                        <input type='password' name='password' placeholder='Password' />
                        <input type='password' name='reinsertPassword' placeholder='Confirm' />
                    </div>
                    <p className='signup-obs'>Use 8 or more characters with a mix of letters, numbers and symbols</p><br/>
                    
                    <img src={SteamLogo} alt='steam logo' style={{height: '45px', width: '45px', paddingBottom: '2px'}} />
                    <input className='signup-large-input' type='text' name='steam_username' placeholder='Steam Username' />
                    <div className='signup-column-wrapper'>
                        <a className='signup-redirect-link' href='/login'>Log in instead</a>
                        <button className='signup-btn-submit' type='submit'>CREATE</button>
                    </div>
                </form>
            </div>}
            {isLogged && <div className='signup-success'>
                <h1 className='signup-success-title'>You're part of this adventure now!</h1>
                <img className='signup-success-gif' src={SignupSuccessGIF} alt='Signup Success' />
            </div>}
        </div>
    );
}

export default SignUp;
