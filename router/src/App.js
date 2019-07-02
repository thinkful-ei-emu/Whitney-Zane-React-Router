import React from 'react';
import './App.css';
import NotePage from './NotePage';
import FolderPage from './FolderPage';
import Store from './Store'
import {Route}from 'react-router-dom';
import Homepage from './HomePage';





class App extends React.Component {

 state={
   store:Store,
   notes:Store.notes,
   folders:Store.folders
 }

  render() {
    return (
      <div className="App">
        
        <Route exact path='/'render={()=>(<Homepage folders={this.state.folders} notes={this.state.notes}/>)}/>
        <Route inexact path='/note/:noteid'render={({match})=>(<NotePage folders={this.state.folders} 
          notes={this.state.notes.filter(note => note.id === match.params.noteid)}/>)}/>
        <Route  path='/folder/:folderid' render={
          ({match}) => (
            <FolderPage folders={this.state.folders} notes={
              this.state.notes.filter(note => note.folderId === match.params.folderid )}/>
            )}/>
      </div>
    );
  }
}

export default App;
