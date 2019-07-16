import React from 'react';
import './App.css';

import Settings from '../../components/Settings';
import Cards from '../../components/Cards';
import Favorites from '../../components/Favorites';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
       Home
      </header>
      <Settings/>
      <Cards/>
      <Favorites/>
    </div>
  );
}

export default App;
