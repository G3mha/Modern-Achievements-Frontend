import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import './Profile.css';
import Logo from '../../Images/Logo.png';
import axios from 'axios';

function Profile({username}) {
    const [username, setUsername] = useState('');

    // function that sends a request to the server with the search term on body
    
    
    return (
        <div className='profile'>
            