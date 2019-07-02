import React from 'react';
import Header from './Heading';
import Note from './Note';
import NoteNav from './NoteNav';

function NotePage(props) {
const modified=new Date(props.notes[0].modified)
const date=modified.toDateString();
  return (
    <div className="note-page">
      <Header />
      <NoteNav store={props.store}/>
      <Note name={props.notes[0].name} date={date}/>
      <p>{props.notes[0].content}</p>
    </div>
  )
}

export default NotePage;