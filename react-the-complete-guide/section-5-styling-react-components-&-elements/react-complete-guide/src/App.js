import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';   // components should have a capital letter when imported

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  // reserved word and used to manage component internal data
  // if state changes then the component will be re-rendered automatically
  state = {
    persons: [
      { id: 'sdkhj', name: 'Max', age: 28 },
      { id: 'ghlkn', name: 'Manu', age: 29 },
      { id: 'qewty', name: 'Steph', age: 26 }
    ],
    otherState: 'some other state',
    showPersons: false
  }

  // always update state in an immutable matter
  // create a copy of the original state, change it and then update the state using setState
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;     // this will get a reference to the persons array specified in state
    //persons.splice(personIndex, 1);         // removes 1 element from array starting at personIndex (will modify original array in state due to reference (not a good idea))
    //const persons = this.state.persons.slice();   // creates a copy of the array
    const persons = [...this.state.persons];        // use the spread operator to copy the elements from original array
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event, id) => {     // could also use index in the array instead of id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]    // spread operator to create an object for the person
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {     // map will execute whatever function we define on every element in the array (person can be named whatever we want)
            return (
              <Person 
                click={() => this.deletePersonHandler(index)} // anonymous function so won't be called immediately (could have used bind alternative)
                changed={(event) => this.nameChangedHandler(event, person.id)}
                name={person.name} 
                age={person.age} 
                key={person.id}     // key is a default property that React expects on a list item (helps react update the Virtual DOM by being able to compare elements from the past to the future)
              />
            );
          })}
        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      // best practice to wrap everything in one root element
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          className="button"
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton> */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;