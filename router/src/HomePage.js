import React from 'react';
import Heading from './Heading';
import FolderList from './FolderList';
import NoteList from './NoteList';

function Homepage(props) {

  return (
    <div> 
      <Heading />
      <FolderList folders={props.folders}/>
      <NoteList notes={props.notes} />
    </div>)
}

export default Homepage;