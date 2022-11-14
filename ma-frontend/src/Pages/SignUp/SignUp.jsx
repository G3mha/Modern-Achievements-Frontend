import React, { Component } from 'react';
import './SignUp.css';
import Logo from "../../Images/Logo.png";

class SignUp extends Component {
    render() {
        return (
            <div className='signup-fullpage'>
                <div className='signup-flex'>
                    <img src={Logo} alt='logo' style={{height: '50px', width: '50px'}} />
                    <h1>Create your account</h1>
                    <form className='signup-form'>
                        <div className='signup-column-wrapper'>
                            <input type='text' name='firstname' placeholder='First Name' />
                            <input type='text' name='lastname' placeholder='Last Name' />
                        </div>
                        <input className='signup-large-input' type='email' name='email' placeholder='Email' />
                        <p className='signup-obs'>You'll need to confirm that this email belongs to you</p>
                        <div className='signup-column-wrapper'>
                            <input type='password' name='password' placeholder='Password' />
                            <input type='password' name='reinsertPassword' placeholder='Confirm' />
                        </div>
                        <p className='signup-obs'>Use 8 or more characters with a mix of letters, numbers and symbols</p><br/>
                        <div className='signup-column-wrapper'>
                            <a className='signup-redirect-link' href='/login'>Log in instead</a>
                            <button className='signup-btn-submit' type='submit'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
