import React from 'react';
import Heading from './Heading';
import FolderList from './FolderList';
import NoteList from './NoteList';

function Homepage() {

  return (
    <div> <Heading />
      <FolderList />
      <NoteList />
    </div>)
}

export default Homepage;