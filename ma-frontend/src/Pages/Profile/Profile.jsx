import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import JohnTravolta from '../../Images/UserNotFound.gif';

function Profile() {
    const [isUserFound, setIsUserFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [games, setGames] = useState([]);
    
    // function that sends a request to the server with the search term on body
    async function requestGames() {
        var username = JSON.parse(localStorage.getItem('username'));
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
        return response;
    }
    
    useEffect(() => {
        console.log('useEffect');
        var response = requestGames();
        response.then((response) => {
            if (response.data.HttpStatusCode === 200) {
                setIsUserFound(true);
                setGames(response.data.games);
                setIsLoading(false);
            } else {
                setIsUserFound(false);
            }
        });
    }, []);

    return (
        <div className='profile-fullpage'>
            {(!isLoading && isUserFound) ? <div className='profile-user-found'>
                    <h1>{JSON.parse(localStorage.getItem('username'))}</h1>
                    <div className='profile-games-list'>
                        {games.map((game) => (
                            <div key={`game__${game.name}`} className='profile-games-card'>
                                <h3>{game.name}</h3>
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