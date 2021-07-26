/*  eslint-disable func-style, no-unused-vars, no-console */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';


import axios from 'axios';


const UserContext = createContext();

function UserContextProvider({ children }){
  const {user, setUser} = useState({});
  const {conspirators, setConspirators} = useState([]);
  const {favorites, setFavorites} = useState([]);
  const isLoggedIn = true;

  const googleLogin = async () => {
    await axios.get('/auth/google')
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
  );
}


UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { UserContext, UserContextProvider };
