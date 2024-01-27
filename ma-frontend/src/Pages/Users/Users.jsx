import React from 'react';
import './Users.css';
import Axios from 'axios';


function Users() {
    
    async function handleUsers() {
        const axios = require('axios');
        // Request to get access token for exercise auth
        var request = {
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/search/users',
            data: {},
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };
        const response = await axios(request);
        return response.data.users;
    }

    const userList = handleUsers();


    
    return (
        <div className='user-grid'>
            {userList.map((user) => (
                <div className='user-card'>
                    <a href={user.url}><img className='user-icon' src={user.icon} alt='user icon' /></a>
                    <p className='user-name'>{user.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Users;
