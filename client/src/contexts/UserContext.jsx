/*  eslint-disable func-style, no-unused-vars, no-console */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';


import axios from 'axios';


const UserContext = createContext();

function UserContextProvider({ children }){
  const [userObj, setUserObj] = useState({});
  const [conspirators, setConspirators] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showPassword] = useState(false);
  const [userReg, setUserReg] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [userLogin, setUserLogin] = useState('');
  const [passLogin, setPassLogin] = useState('');

  const handleUserReg = (event) => setUserReg(event.target.value);
  const handlePass = (event) => setPass(event.target.value);
  const handleConfirm = (event) => setConfirm(event.target.value);
  const handleUserLogin = (event) => setUserLogin(event.target.value);
  const handlePassLogin = (event) => setPassLogin(event.target.value);


  // This isn't used
  const googleLogin = async () => {
    await axios.get('/auth/google')
    .then((result) => console.log('successful login', result))
    .catch((err) => console.log(err));
  };

  const localRegister = async (username, password, confirmation) => {
    if(username.length && password.length && confirmation.length){
    if(password === confirmation) {
      await axios.post('/register', {username, password});
    } else {
      alert('passwords do not match');
    }
  } else {
    alert('no field should be empty');
  }
  };

  const getUser = () => {
    axios.get('/getUser', { withCredentials: true }).then(res => {
      // if(res.data){
      //   setUser(res.data);
      // }
      console.log(res.data);
  }
  );
};

  // const getUser = () => {
  useEffect(() => {
    axios.get('/getUser', { withCredentials: true }).then(res => {
      if(res){
        setUserObj(res.data);
      }
      console.log('this is res', res);
    }
    );
  }, []);
    // };

  const localLogin = async ( username, password ) => {
    await axios.post('/login', { username, password })
    .then((result) => console.log('successful login', result.data))
    .catch((err) => console.log('login error', err));
  };

  const localLogout = async () => {
    await axios.get('/logout')
    .then(() => console.log('successful logout'));
  };

  const userProps = {
    userObj,
    isLoggedIn,
    googleLogin,
    localRegister,
    localLogin,
    localLogout,
    getUser,
    conspirators,
    setConspirators,
    confirm,
    pass,
    userReg,
    showPassword,
    handleUserReg,
    handlePass,
    handleConfirm,
    userLogin,
    passLogin,
    handleUserLogin,
    handlePassLogin,
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
