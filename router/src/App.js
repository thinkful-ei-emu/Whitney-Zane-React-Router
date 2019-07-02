import React from 'react';
import './App.css';
import Heading from './Heading';
import NoteList from './NoteList';
import FolderList from './FolderList';
import Store from './Store'
import {Route}from 'react-router-dom';
import Homepage from './HomePage';





class App extends React.Component {

 state={
   store:Store
 }

  render() {
    return (
      <div className="App">
        
        <Route exact path='/'component={Homepage}/>
        <Route inexact path='/folder/:folderid'component={NoteList}/>
       
      </div>
    );
  }
}

export default App;
