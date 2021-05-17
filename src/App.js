import React, { Component } from 'react';
import {
  Route, 
  Redirect, 
  Switch,
} from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
  render(){
    const { history } = this.props
    return (
      <Switch>
        <Route history={history} exact path='/' component={Login} />
        <Route history={history} path='/profile' component={Profile} />
        <Route history={history} path='/register' component={Register} />
        <Redirect to='/' component={Login} />
      </Switch>

    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
