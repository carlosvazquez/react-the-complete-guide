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
    person: [
      {name: 'John', age: 34 },
      {name: 'Karen', age: 24 },
      {name: 'Bob', age: 45 }
    ],
    showPersons: false
  }
  switchNameHandler = (newName) => {
    console.log(this.state.value);
    let _name = newName || 'Joan';
    this.setState({
      person: [
        {name: _name, age: 34 },
        {name: 'Karen', age: 24 },
        {name: 'Roberto', age: 45 }
      ]
    });
  }
  nameChangeHandler = (event) => {
    this.setState({
      person: [
        {name: 'Max', age: 34 },
        {name: event.target.value, age: 29 },
        {name: 'Roberto', age: 45 }
      ]
    });
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
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
        { this.state.person.map((person, index) => {
          return <Person
          click={ this.switchNameHandler }
          name={ person.name }
          key={ index }
          age={ person.age } />
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
