import React from 'react';

import './style.css';

import Header from './Header';

const Home: React.FC = () => {
    return(
        <div className='home'>
            <Header/>
            <div className='container'>
                <h1 className='title'>Welocme to our<br/>application for learning<br/>English word</h1>
                <img className='home__img' src="https://www.onlygfx.com/wp-content/uploads/2016/08/flag-of-uk.png" alt="flag"/>
            </div>
        </div>
    );
}

export default Home;