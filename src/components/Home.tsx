import React from 'react';

import './style.css';

import Header from './Header';

const Home: React.FC = () => {
    return(
        <div className='home'>
            <Header/>
            <div className='container'>
                <h1 className='title'>Welocme to our<br/>application for learning<br/>English word</h1>
            </div>
        </div>
    );
}

export default Home;