import React, { useState } from 'react';

import Login from './components/Login.jsx';
import CreateUser from './components/CreateUser.jsx';

const LoginContainer = (props) => {
  const { user, setUser, updateUserClick } = props;
  const [ view, setView ] = useState('login');

  const createUserClick = () => {
    setView('createUser')
  }

  return (
    <div>
      yo
    </div>
  ); 
};

export default LoginContainer;
