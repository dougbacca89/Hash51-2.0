import React from 'react';
import PropTypes from 'prop-types';

const Login = props => {
  const { createUserClick } = props;
  
  return ( 
    <div>
      Username:<input /><br/>
      Password:<input /><br/>
      <button type='button'>Login</button>
      <button type='button' onClick={createUserClick}>Create user</button>
    </div>
  );
};

Login.propTypes = {
  createUserClick: PropTypes.isRequired,
};

export default Login;
