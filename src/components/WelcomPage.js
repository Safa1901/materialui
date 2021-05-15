import React from 'react';
import {createBrowserHistory} from 'history'

import Login from './Login';

export const history = createBrowserHistory();

class WelcomePage extends React.Component {
    state ={
      email: '',
      password: ''
    }
    onEmailChange = (e) =>{
      this.setState({
          email: e.target.value
      })
    }  
    onPasswordChahge = (e) =>{
      this.setState({
        password: e.target.value
      })
    }
    onSigninSubmit = (e) =>{
      e.preventDefault();
      console.log('email: ' + this.state.email + ', password: ' + this.state.password);
      this.props.history.push("/profile")
    }

    render() {
      return(
        <Login 
          onSigninSubmit={this.onSigninSubmit} 
          onEmailChange={this.onEmailChange}
          email={this.state.email}
          password={this.state.password}
          onPasswordChahge={this.onPasswordChahge}
        />
      )
    }
  }
  
  export default WelcomePage;