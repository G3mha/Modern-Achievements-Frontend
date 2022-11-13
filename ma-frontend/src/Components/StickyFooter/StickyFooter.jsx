// this file was extracted from a template provided by Material UI:
// https://mui.com/material-ui/getting-started/templates/
// The copy and distribution of this material is legal and the permission of the creators was conceiled in 08/11/2022 to Enricco Gemha.

import React, { Component } from 'react';
import './StickyFooter.css';

class StickyFooter extends Component {
    render() {
        return (
            <div className='footer'>
                <p className='primary'>
                    This project was developed by Enricco Gemha, Eric Possato and Pedro Bittar.
                </p>
                <p className='secondary'>
                    Copyright © <a href='/'>Modern Achievements</a> {new Date().getFullYear()}.
                </p>
            </div>
        );
    }
}

export default StickyFooter;
