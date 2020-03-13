import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'kezmorz'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} changed={this.usernameChangedHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username={'enamresu'}/>
      </div>
    );
  }
}

export default App;
