import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import WelcomePage from './components/WelcomPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/(welcome)?' component={WelcomePage} />

        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
