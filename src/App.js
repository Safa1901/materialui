import React, { Component } from 'react';
import {
  Route, 
  Redirect, 
  Switch,
  withRouter
} from 'react-router-dom';

import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register'

class App extends Component {
  render(){
    const { history } = this.props
    return (
      <Switch>
        <Route history={history} exact path='/' component={Register} />
        <Route history={history} path='/profile' component={Profile} />
        <Route history={history} path='/login' component={Login} />
        <Redirect to='/' component={Login} />
      </Switch>

    );
  }
}

export default withRouter(App);
