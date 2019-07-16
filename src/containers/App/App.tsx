import React from 'react';
import './App.css';

import Home from '../../components/Home';
import Settings from '../../components/Settings';
import Cards from '../../components/Cards';
import Favorites from '../../components/Favorites';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/settings' component={Settings}/>
        <Route exact path='/cards' component={Cards}/>
        <Route exact path='/favorites' component={Favorites}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
