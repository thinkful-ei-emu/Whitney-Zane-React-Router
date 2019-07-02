import React from 'react';
import Header from './Heading';
import FolderList from './FolderList';
import NoteList from './NoteList';

function FolderPage(props) {
console.log(props.notes);
  // Highlight the selected folder
  // only show notes in selected folder

  return(
    <div className='folder-page'>
      <Header />
      <FolderList folders={props.folders}/>
      <NoteList match={props.match} notes={props.notes}/>
    </div>
  )
}

export default FolderPage;