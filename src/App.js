import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Option to if with jsx
// { this.state.showPersons ? 
//  : null
// }

class App extends Component {
  state = {
    value: 1,
    persons: [
      {id:1, name: 'John', age: 34 },
      {id:2, name: 'Karen', age: 24 },
      {id:3, name: 'Bob', age: 45 }
    ],
    showPersons: false
  }
  nameChangeHandler = (event, id) => {
    // findIndex recibe una funcion
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // copy 
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    // sacamos copy
    const persons = [...this.state.persons];
    // con el index buscamos el elemento y lo reasignamos
    persons[personIndex] = person; 
    this.setState({ persons: persons });
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }
  render() {
    const orangeblock = {
      backgroundColor: '#fffffff'
    }
    let person = null;

    if(this.state.showPersons) {
      person = (
      <div>
        { this.state.persons.map((person, index) => {
          return <Person
          click={() => this.deletePersonHandler(index) }
          name={ person.name }
          key={ person.id }
          age={ person.age }
          changed={(event)=> this.nameChangeHandler(event, person.id) }
          />
        })}
      </div>
      );
    }
    return (
      <div style={orangeblock} className="App">
        <h1>Hi, I'm Carlos and these are my friends</h1>
        <button onClick={ this.togglePersonHandler } className="log">Switch name</button>
        { person }
      </div> 
    );
  }
}

export default App;
