/*  eslint-disable func-style, no-console, dot-notation, camelcase */
import React, { createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';


import axios from 'axios';

const UserContext = createContext();

function UserContextProvider({ children }){
  const [userObj, setUserObj] = useState({});
  const [conspirators, setConspirators] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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


  const storeEvidence = async (nasa_id) => {
    const id = userObj['_id'];
    await axios.post('/store/favorites', { id, nasa_id });
  };


  const getEvidence = async () => {
    if(Object.keys(userObj).length){
    await axios.get('/get/favorites')
    .then(({data}) => {
      setFavorites(data);});
    }
  };

  // This isn't used --> Remove Eventually
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
      if(res.data){
        setUserObj(res.data);
        setIsLoggedIn(true);
      }
    }
    );
  };

  const addConspirator = (friendId) => {
    axios.post('/add/conspirator', { friendId });
  };

  const getConspirators = () => {
    axios.get('/get/conspirators')
    .then(({ data }) => setConspirators(data));
  };

  const fetchConspiratorFavorites = (friendId) => {
    axios.post('/conspirator/favorites', { friendId });
  };

  const localLogin = ( username, password ) => {
    axios.post('/login', { username, password })
    .then((result) => { console.log('successful login', result.data); getUser(); })
    .catch((err) => console.log('login error', err));
  };

  const localLogout = () => {
    setIsLoggedIn(false);
    setUserObj({});
    setFavorites([]);
    setConspirators([]);
    axios.get('/logout')
    .then(() => console.log('successful logout'));
  };

  useEffect(async () => {
    getUser();
    // if(userObj){
    getEvidence();
    // }
  }, [JSON.stringify(userObj)]);


  const userProps = {
    favorites,
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
    storeEvidence,
    getEvidence,
    addConspirator,
    fetchConspiratorFavorites,
    getConspirators,
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
