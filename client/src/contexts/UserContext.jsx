// eslint-disable (func-style)
import React, { createContext } from 'react';


const UserContext = createContext();

function UserContextProvider({ children }){

  const isLoggedIn = true;

  const userProps = {
    isLoggedIn
  };

  return (
    <UserContext.Provider value={userProps}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider };
