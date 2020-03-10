import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';   // components should have a capital letter when imported

class App extends Component {
  // reserved word and used to manage component internal data
  // if state changes then the component will be re-rendered automatically
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steph', age: 26 }
    ],
    otherState: 'some other state'
  }

  // handler is a good naming practice when creating a function used with an event
  switchNameHandler = (newName) => {
    // this would not refer to the class if we didn't use ES6 arrow functions (i.e. if we used function())
    // this.state.persons[0].name = 'Maximilian'; // don't do this
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Steph', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Steph', age: 26 }
      ]
    })
  }

  render() {
    // inline style when we want to scope the style to a particular element and not pollute global styling
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      // best practice to wrap everything in one root element
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max')}    // common pattern that allows stateless objects to manipulate state (potentially more efficient than anonymous inner function)
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;