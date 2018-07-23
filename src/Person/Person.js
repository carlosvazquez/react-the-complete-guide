import React from 'react';
import  './Person.css'
const person = (props) => {
  const orangeblock = {
    backgroundColor: 'pink'
  }
  return (
  <div style={orangeblock} className="Person">
    <h3>I'm { Math.floor(Math.random() * 30) } years old</h3>
    <p onClick={ props.click} >Mi name is { props.name } and I have { props.age } real age</p>
    <input type="text" onChange={ props.changed } value={ props.name }/>
    <p>{ props.children }</p>
  </div>
  );
}

export default person;
