import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../../Components/NavBar/NavBar";
import StickyFooter from "../../Components/StickyFooter/StickyFooter";
import Toon from '../../Images/Toon.png';


class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className='text-block'>
                    <br />
                    <br />
                    <h1 className='retro gradient-text-green'>Modern</h1>
                    <h1 className='retro gradient-text-green'>Achievements</h1>
                    <br />
                    <p className='right-align modern gradient-text-purple'>
                        (re)defining the way we play video games.
                    </p>
                    <br />
                    <p className='left-align modern gradient-text-purple'>
                        join us in this mission right now! <img src={Toon} style={{height: '150px', width: '150px'}}></img>
                    </p>
                </div>
                <StickyFooter />
            </>
        );
    }
}

export default Home;
