import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/misc/Home';
import Navbar from './components/misc/Navbar';
import BeerList from './components/beers/BeerList';
import BeerDetail from './components/beers/BeerDetail';
import NewBeer from './components/beers/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" component={BeerList} />
            <Route exact path="/new-beer" component={NewBeer} />
            <Route exact path="/:id" component={BeerDetail} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
