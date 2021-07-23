import React from 'react';

const Login = props => {
  const { user, createUserClick } = props;
  
  return ( 
    <div>
      Username:<input></input><br/>
      Password:<input></input><br/>
      <button>Login</button>
      <button onClick={createUserClick}>Create user</button>
    </div>
  )
};

export default Login;
