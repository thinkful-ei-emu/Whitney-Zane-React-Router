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
   store:Store,
   notes:Store.notes,
   folder:Store.folders
 }

  render() {
    return (
      <div className="App">
        
        <Route exact path='/'render={()=>(<Homepage notes={this.state.store.notes}/>)}/>
        <Route inexact path='/note/:noteid'render={()=>(<NoteList notes={this.state.store.notes}/>)}/>
        <Route  path='/folder/:folderid'/>
      </div>
    );
  }
}

export default App;
