import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Profile from './components/Profile';
import Register from './components/Register'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WelcomePageWithAuth } from './components/WelcomPage';
import {createBrowserHistory} from 'history';

class App extends Component {
  render(){
    const { history } = createBrowserHistory();

    if (this.props.isLoggedIn) {
      return (
        <Switch>
          <Route history={history} exact path='/' component={WelcomePageWithAuth} />
          <Route history={history} path='/profile' component={Profile} />
          <Route history={history} path='/register' component={Register} />
        </Switch>
      );
    }
    return (
      <Switch>
        <Route history={history} exact path='/' component={WelcomePageWithAuth} />
        <Route history={history} path='/profile' component={Profile} />
        <Route history={history} path='/register' component={Register} />
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
