import React from 'react';


function Folder(props){
  const folderRoute = `folder/${props.id}`
  return(
    // <NavLink to={folderRoute}
    // activeStyle={{}}>
    <li>{props.name}</li>
    /* </NavLink> */
  )
}

export default Folder;