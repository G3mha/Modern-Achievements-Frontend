import React, { Component } from 'react';
import Title from '../../Images/title.svg';


class Home extends Component {
  render() {
    return (

      <div className='bg-black text-secondary font-raleway font-bold text-6xl'>
        <br />
        <br />
        <img src={Title} alt='logo' className='w-50 self-center' />
        <br />
        <p>
          (re)defining the way we play video games.
        </p>
        <br />
        <p>
          join us in this mission right now!
        </p>
      </div>
    );
  }
}

export default Home;
