import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import './NavBar.css';
import Logo from '../../Images/Logo.png';
import axios from 'axios';


function NavBar({loggedIn}) {
    const [searchTerm, setSearchTerm] = useState('');

    // function that sends a request to the server with the search term on body
    async function handleSearch(e) {
        if(e) e.preventDefault();
        setSearchTerm(e.target[0].value);

        if (searchTerm !== '') {
            var request = {
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/search/db/username/',
                data: {'searchTerm': searchTerm},
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            };
            const response = await axios(request);
            if (response.data.HttpStatusCode === 200) {
                const username = response.data.user.username;
                window.location.href = '/search/user/' + username;
            }
            if (response.data.HttpStatusCode !== 404) {
                // window.location.href = '/search/usernotfound';
            }
            return null;
        }
    };

    function handleLogOut(e) {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    }

    return (
        <div className='navbar'>
            <a href='/'><img className='navbar-logo' src={Logo} alt='logo' /></a>
            <form autoComplete='off' onSubmit={(e)=>handleSearch(e)}>
                <input className='navbar-input' type='text' name='search' placeholder='Search for other brave members using their usernames!' />
                <button className='navbar-btn navbar-btn-search' type='submit'><AiOutlineSearch /></button>
            </form>
                {!loggedIn ? <div className='navbar-btn-group'>
                    <a href='/signup'><button type='button' className='navbar-btn'>SIGN UP</button></a>
                    <a href='/login'><button type='button' className='navbar-btn'>LOG IN</button></a>
                </div> : <div className='navbar-btn-group'>
                    <a href='/profile'><button type='button' className='navbar-btn navbar-btn-profile'><AiOutlineUser /></button></a>
                    <a href='/'><button type='button' onClick={(e)=>handleLogOut(e)} className='navbar-btn'>LOG OUT</button></a></div>}
        </div>
    );
}

export default NavBar;
