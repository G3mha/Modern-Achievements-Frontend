import React, { Component, useState } from 'react';
import './NavBar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Logo from '../../Images/Logo.png';
import axios from "axios";


function NavBar() {
    const [searchTerm, setSearchTerm] = useState('');

    // function that sends a request to the server with the search term on body
    async function handleSearch(e) {
        setSearchTerm(e.target[0].value);
        if(e) e.preventDefault();
        
        if (searchTerm !== '') {
            var request = {
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/search/',
                data: {'searchTerm': searchTerm},
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            };
            const response = await axios(request);
            return response.data;
        }
    };

    return (
        <nav className='navbar'>
            <a href='/'><img className='navbar-logo' src={Logo} alt='logo' /></a>
            <form autoComplete='off' onSubmit={(e)=>handleSearch(e)}>
                <input className='navbar-input' type='text' name='search' placeholder='Search for other brave members using their usernames!' />
                <button className='navbar-btn navbar-search' type='submit'><AiOutlineSearch /></button>
            </form>
            <div className='navbar-btn-group'>
                <button className='navbar-btn' href='/signup'>SIGN UP</button>
                <button className='navbar-btn' href='/login'>LOG IN</button>
            </div>
        </nav>
    );
}

export default NavBar;
