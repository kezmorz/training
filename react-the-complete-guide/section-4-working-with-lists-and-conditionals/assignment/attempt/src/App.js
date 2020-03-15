import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  userInputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const characters = this.state.userInput.split('');
    characters.splice(index, 1);
    const input = characters.join('');
    this.setState({
      userInput: input
    });
  }

  render() {
    let userInputLength = (
      <p>{this.state.userInput.length}</p>
    );

    let characters = (
      <div>
        {this.state.userInput.split('').map((char, index) => {
          return (
            <Char key={index} character={char} click={() => this.deleteCharHandler(index)}/>
          )
        })}
      </div>
    );

    return (
      <div className="App">
        <input type="text" onChange={this.userInputChangedHandler} value={this.state.userInput} />
        {userInputLength}
        <Validation length={this.state.userInput.length} />
        {characters}
      </div>
    );
  }
}

export default App;
