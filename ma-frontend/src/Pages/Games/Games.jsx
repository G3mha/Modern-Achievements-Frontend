import React, { Component } from 'react';
import './Games.css';
import Axios from 'axios';


function Games() {
    
    async function getGames() {
        const axios = require('axios');
        // Request to get access token for exercise auth
        var request = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/search/games',
        data: {},
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        };
        const response = await axios(request);
        return response.data;
    }

    const gameList = getGames();


    
    return (
        <div className='games-fullpage'>
            <div className='games-grid'>
                {gameList.map((game) => (
                    <div className='game'>
                        <a href='/'><img src={game.poster} alt='game poster' className='game-poster'/></a>
                        <p className='game-name'>{game.name}</p>
                    </div>
                ))}

                <h1>Log in</h1>
                <form className='games-form'>
                    <input type='email' name='email' placeholder='Email' /><br />
                    <input type='password' name='password' placeholder='Password' /><br />
                    <div className='games-column-wrapper'>
                        <a className='games-redirect-link' href='/signup'>Create account</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Games;
