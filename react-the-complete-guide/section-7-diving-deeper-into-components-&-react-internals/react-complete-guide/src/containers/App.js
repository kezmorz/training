import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';   // components should have a capital letter when imported
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

// this is now a container: it manages the state and manipulates the state

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
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    //this.state = { ... }    // we would use this.state to set the initial state in the constructor
  }
  // reserved word and used to manage component internal data
  // if state changes then the component will be re-rendered automatically
  // this is modern syntax and will simply add the constructor for us and initialise the state in the constructor
  state = {
    persons: [
      { id: 'sdkhj', name: 'Max', age: 28 },
      { id: 'ghlkn', name: 'Manu', age: 29 },
      { id: 'qewty', name: 'Steph', age: 26 }
    ],
    otherState: 'some other state',
    showPersons: false,
    changeCounter: 0,
    athenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    // when we're updating state and rely on a value from the previous state, then we should use the anonymous
    // function shown below to guarantee we're using the latest version of the state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  render() {
    console.log('[App.js] render'); 
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated}
      />
    }

    return (
      // best practice to wrap everything in one root element
      // we also want to wrap everything that needs access to AuthContext in the AuthContext.Provider component
      <Aux>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length} 
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default withClass(App, classes.App);