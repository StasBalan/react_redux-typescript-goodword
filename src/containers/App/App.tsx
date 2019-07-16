import React from 'react';
import './App.css';

import Header from '../../components/Header';
import Settings from '../../components/Settings';
import Cards from '../../components/Cards';
import Favorites from '../../components/Favorites';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Settings/>
      <Cards/>
      <Favorites/>
    </div>
  );
}

export default App;
