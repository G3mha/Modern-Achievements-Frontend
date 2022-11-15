import './UserNotFound.css';
import JohnTravolta from '../../Images/UserNotFound.gif';

function UserNotFound() {
    return (
        <div className='unf'>
            <h1 className='unf-title'>User not found</h1>
            <img className='unf-john-travolta' src={JohnTravolta} alt='John Travolta' />
        </div>
    );
}

export default UserNotFound;