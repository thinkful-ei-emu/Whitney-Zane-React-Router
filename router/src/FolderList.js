import React from 'react';
import Folder from './Folder';
import { NavLink } from 'react-router-dom';

function FolderList(props) {
  
  const folderList = props.folders.map((folder, index) => {
    const folderRoute = `/folder/${folder.id}`
    return <NavLink to={folderRoute}><Folder name={folder.name} key={index} id={folder.id}/></NavLink>
  })
  return (
    <div>
      <ul>
        {folderList}
      </ul>
      <button>Add Folder</button>
    </div>
  )
}

export default FolderList;