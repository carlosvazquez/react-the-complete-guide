import React from 'react';
import  './Person.css'
const person = (props) => {
  const orangeblock = {
    backgroundColor: 'pink'
  }
  return (
  <div style={orangeblock} className="Person">
    <h3>I'm { props.name } with { Math.floor(Math.random() * 30) } years old</h3>
    {/* cuando hagas click, ejecutas la propiedad click que en este caso es un metodo */}
    <button onClick={ props.click}>Borrar</button>
    <input type="text" onChange={ props.changed } value={ props.name }/>
    <p>{ props.children }</p>
  </div>
  );
}

export default person;
