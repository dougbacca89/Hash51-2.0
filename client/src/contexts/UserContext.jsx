/*  eslint-disable func-style */
import React, { createContext, useState } from 'react';
import axios from 'axios';


const UserContext = createContext();

function UserContextProvider({ children }){
  const {user, setUser} = useState({});
  const {conspirators, setConspirators} = useState([]);
  const {favorites, setFavorites} = useState([]);
  const isLoggedIn = true;

  const googleLogin = () => {
    axios.get('routes/passportRoutes/auth/google')
    // .then(() => axios.get('routes/passportRoutes/auth/google/home'))
    .then(() => console.log('successful login'))
    .catch((err) => console.log(err));

  };

  const userProps = {
    isLoggedIn,
    googleLogin
  };


  return (
    <UserContext.Provider value={userProps}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider };
