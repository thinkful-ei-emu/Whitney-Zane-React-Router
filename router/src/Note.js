import React from 'react';


function Note(props){

  return (
    <li><h3>{props.name}</h3>
    <p>Date modified on {props.date}</p>
    <button>Delete</button>
    </li>
  )
}

export default Note;