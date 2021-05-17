import React from 'react';
import {createBrowserHistory} from 'history';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {authenticate} from '../actions';

import Login from './Login';

export const history = createBrowserHistory();

class WelcomePage extends React.Component {
  // state = {
  //   email: '',
  //   password: ''
  // }
  // onEmailChange = (e) => {
  //   this.setState({
  //       email: e.target.value
  //   })
  // }  
  // onPasswordChahge = (e) => {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }
  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  };

  goToProfile = (event) => {
    event.preventDefault();
    this.props.navigate("profile");
  };

  render() {
    return(
      <Login 
        submit={this.goToProfile}
        authenticate={this.authenticate} 
        onEmailChange={this.onEmailChange}
        email={this.state.email}
        password={this.state.password}
        onPasswordChahge={this.onPasswordChahge}
      />
    )
  }
}

WelcomePage.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};
  
export const WelcomePageWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(WelcomePage);