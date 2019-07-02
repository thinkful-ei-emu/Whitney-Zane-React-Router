import React from 'react';


function Note(props){

  return (
    <li><h3>{props.title}</h3>
    <p>{props.date}</p>
    <button>Delete</button>
    </li>
  )
}

export default Note;