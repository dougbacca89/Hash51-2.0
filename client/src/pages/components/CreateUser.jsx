import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

const CreateUser = props => {
  const { updateUserClick } = props;
  
  return (
  <div>
    <Redirect to="/createUser" />
    Username:<input id='userName' placeholder="Enter user name"></input><br/>
    Password:<input placeholder="Enter password"></input><br/>
    Verify password:<input placeholder="Retype password"></input><br/>
    
    <Link to='/story'>
      <button to='/story' onClick={() => {updateUserClick(document.getElementById('userName').value)}}>
        Create
        
      </button>
    </Link>
  </div>
  )};

export default CreateUser;
