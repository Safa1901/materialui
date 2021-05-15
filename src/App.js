import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


import Profile from './components/Profile';
import Login from './components/Login';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Redirect to='/' component={Login} />
      </Switch>
    </Router>
  );
}


export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);