import React from 'react';
import './Loading.css';
import Loader from "../../Images/Loader.gif";

function Loading({isLoadingSteam}) {

    return (
        <div className='loading-page'>
            <img className='loading-icon' src={Loader} alt='logo' /><br />
            {isLoadingSteam &&
                <h1 className='loading-message'>Loading your Steam Account data...<br />Please, do not close or recharge this page until the upload is completed.</h1>
            }
        </div>
    );
}

export default Loading;