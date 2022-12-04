import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import JohnTravolta from '../../Images/UserNotFound.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../../Components/Loading/Loading';

function Profile({username}) {
    const [isUserFound, setIsUserFound] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [games, setGames] = useState([]);
    
    
    useEffect(() => {
        // function that sends a request to the server with the search term on body
        async function requestGames() {
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
        var response = requestGames();
        response.then((response) => {
            if (response.data.HttpStatusCode === 200) {
                setIsUserFound(true);
                setGames(response.data.games);
                console.log(response.data.games);
                setIsLoading(false);
            } else {
                setIsUserFound(false);
            }
        });
    }, []);

    return (
        <div>
            {isLoading && <Loading isLoadingSteam={false} />}
            {!isLoading && isUserFound && 
                <div className='profile-user-found'>
                    <div className='profile-fullpage'>
                        <h1>{username}</h1>
                        <div className='profile-games-list'>
                            {games.map((game) => (
                                <div key={`game__${game.name}`} className='profile-games-card'>
                                    <h3>{game.name}</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: `${(Math.round(game.completion_rate * 100))}%`}} aria-valuenow={`${(Math.round(game.completion_rate * 100))}`} aria-valuemin="0" aria-valuemax="100">{Math.round(game.completion_rate * 100)}%</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
            {!isLoading && !isUserFound &&
                <div className='unf'>
                    <h1 className='unf-title'>User not found</h1>
                    <img className='unf-john-travolta' src={JohnTravolta} alt='John Travolta' />
                </div>
            }
        </div>
    );
}

export default Profile;