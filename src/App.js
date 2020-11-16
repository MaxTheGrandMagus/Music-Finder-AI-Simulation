import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './components/main/mainpage';

import Step1 from './components/step1/step1';
import Step1Genre from './components/step1genre/step1genre';
import Step1Artist from './components/step1artist/step1artist';
import Step1Search from './components/step1search/step1search';
import Step1Recom from './components/step1recom/step1recom';



const App = () => {
  return (
    <div className="App">
      <Switch>

        <Route
          exact path = "/"
          component = {MainPage}
        />

        <Route
          exact path = "/step1"
          component = {Step1}
        />
        <Route
          exact path = "/step1genre"
          component = {Step1Genre}
        />
        <Route
          exact path = "/step1artist"
          component = {Step1Artist}
        />
        <Route
          exact path = "/step1search"
          component = {Step1Search}
        />
        <Route
          exact path = "/step1recom"
          component = {Step1Recom}
        />

      </Switch>
    </div>
  );
}

export default App;
