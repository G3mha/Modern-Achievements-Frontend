import React, { useState } from 'react';
import './Profile.css';
import axios from 'axios';
import JohnTravolta from '../../Images/UserNotFound.gif';

function Profile({username}) {
    const [games, setGames] = useState('');
    const [isUserFound, setIsUserFound] = useState(false);

    // function that sends a request to the server with the search term on body
    async function requestGames(username) {
        var request = {
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/user/data/'+ username,
            data: {'username': username},
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };
        const response = await axios(request);
        if (response.data.HttpStatusCode === 200) {
            setIsUserFound(true);
            return response.games;
        }
        setIsUserFound(false);
    }

    setGames(requestGames(username))
    console.log(username);
    return (
        <div className='profile-fullpage'>
            {isUserFound ? <div className='profile-user-found'>
                <h1>{username}</h1>
                <div className='profile-games-list'>
                    {games.map((game) => (
                        <div className='profile-games-card'>
                            <h3>{game.name}</h3>
                            <a href={game.url}><img src={game.poster} alt='game poster' className='game-poster'/></a>
                        </div>
                    ))}
                </div>
            </div> : <div className='unf'>
                <h1 className='unf-title'>User not found</h1>
                <img className='unf-john-travolta' src={JohnTravolta} alt='John Travolta' />
            </div>}
        </div>
    );
}

export default Profile;