import React from 'react';

const CreateUser = props => {
  const { updateUserClick } = props;
  
  return (
  <div>
      Username:<input id='userName' placeholder="Enter user name"></input><br/>
      Password:<input placeholder="Enter password"></input><br/>
      Verify password:<input placeholder="Retype password"></input><br/>
      <button onClick={() => updateUserClick(document.getElementById('userName').value)}>Create</button>
  </div>
  )};

export default CreateUser;
