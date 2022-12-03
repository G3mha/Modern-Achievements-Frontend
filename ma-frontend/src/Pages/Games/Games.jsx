import React, { Component } from 'react';
import './Games.css';
import Axios from 'axios';


function Games() {
    
    async function getGames() {
        const axios = require('axios');
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
        return response.data.games;
    }

    const gameList = getGames();

    return (
        <div className='games-fullpage'>
            <div className='games-grid'>
                {gameList.map((game) => (
                    <div className='games-card'>
                        <a href={game.url}><img src={game.poster} alt='game poster' className='game-poster'/></a>
                        <p className='game-name'>{game.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Games;
