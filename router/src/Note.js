import React from 'react';


function Note(props){

  return (
    <li><h3>{props.name}</h3>
    <p>{props.modified}</p>
    <button>Delete</button>
    </li>
  )
}

export default Note;