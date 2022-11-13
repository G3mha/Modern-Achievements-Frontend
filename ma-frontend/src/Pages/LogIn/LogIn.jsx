import React, { Component } from 'react';
import './LogIn.css';
import NavBar from "../../Components/NavBar/NavBar";
import StickyFooter from "../../Components/StickyFooter/StickyFooter";
import Logo from "../../Images/Logo.png";

class LogIn extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className='fullpage'>
                    <div className='flex'>
                        <img src={Logo} alt='logo image' style={{height: '100px', width: '100px'}} />
                        <h1>Log in</h1>
                        <form className='login-form'>
                            <input type='email' name='email' placeholder='Email' /><br />
                            <input type='password' name='password' placeholder='Password' /><br />
                            <div className='column-wrapper'>
                                <a href='/signup'>Create account</a>
                                <button className='btn-login-submit' type='submit'>Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
                <StickyFooter />
            </>
        );
    }
}

export default LogIn;
