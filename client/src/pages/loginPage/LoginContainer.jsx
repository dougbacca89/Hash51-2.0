import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Login from './components/Login';
import CreateUser from './components/CreateUser';


const LoginContainer = (props) => {
  const { updateUserClick } = props;
  const [ view, setView ] = useState('login');

  const createUserClick = () => {
    setView('createUser');
  };

  return (
    <div>
      {
        view === 'login' ?
        <div>
        <Login createUserClick={createUserClick}/>
        
        </div> :
        <CreateUser updateUserClick={updateUserClick}/>
      }
    </div>
  );
};

LoginContainer.propTypes = {
  updateUserClick: PropTypes.func.isRequired
};

export default LoginContainer;
