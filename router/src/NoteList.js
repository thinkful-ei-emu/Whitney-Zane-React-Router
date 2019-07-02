import React from 'react';
import Note from'./Note'


function NoteList(props){
console.log(props);
  const notes=props.notes.map((note,index)=>{
  const name=note.name
  const modified=note.modified
  return <Note name={name} modified={modified}/>
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
