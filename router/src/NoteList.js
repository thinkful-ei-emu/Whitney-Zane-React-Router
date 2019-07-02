import React from 'react';
import Note from'./Note'
import { NavLink } from 'react-router-dom';


function NoteList(props){
// console.log(props);
  const notes=props.notes.map((note,index)=>{
  const name=note.name
  const modified=new Date(note.modified)
  const date=modified.toDateString();
  const noteRoute = `/note/${note.id}`

  //console.log(date);
  return <NavLink to={noteRoute}><Note name={name} date={date} key={index}/></NavLink>
  })
  return(
    <div>
      <ul>
      {notes}
      </ul>
      <button>Add Note</button>
    </div>
  )
}

export default NoteList;
