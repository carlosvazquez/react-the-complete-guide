import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    value: 1,
    person: [
      {name: 'John', age: 34 },
      {name: 'Karen', age: 24 },
      {name: 'Bob', age: 45 }
    ]
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
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Carlos and these are my friends</h1>
        <button onClick={ this.switchNameHandler } className="log">Switch name</button>
        <Person
          click={ this.switchNameHandler.bind(this, 'Charles') }
          name={ this.state.person[0].name }
          age={ this.state.person[0].age } />
        <Person
          click={ this.switchNameHandler }
          name={ this.state.person[1].name }
          age={ this.state.person[1].age }
          changed={ this.nameChangeHandler } >And her hobies is Running</Person>
        <Person
          click={ this.switchNameHandler }
          name={ this.state.person[2].name }
          age={ this.state.person[2].age } />
      </div>
    );
  }
}

export default App;
