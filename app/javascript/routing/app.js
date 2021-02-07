import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/home';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
