/* eslint-disable func-style */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const EvidenceContext = createContext();
function EvidenceContextProvider({ children }){
  const haveEvidence = 'Yes We Do';
  const [ searchResults, setSearchResults ] = useState([]);
  const [ bodyText, setBodyText ] = useState('');
  const [ href, setHref ] = useState('');
  // eslint-disable-next-line camelcase
  const [ nasa_id, setNasa_id ] = useState('');
  const [ nasaTitle, setNasaTitle ] = useState('');
  const [ userTitle, setUserTitle ] = useState('');
  const [ keyWords, setKeywords ] = useState([]);

  // const { userObj } = useContext(UserContext);

  const handlePostBody = (event) => setBodyText(event.target.value);
  const handlePostTitle = (event) => setUserTitle(event.target.value);

  const fetchSearch = async(query) => {
    await axios.post('/routes/search', { query })
    .then(results => {
      // console.log(results);
      setSearchResults(results.data);
    });
  };

  const fetchImage = async(query) => {
    await axios.post('/routes/asset', { query })
    .then(results => {
      setHref(results.data.items[0].href);
    });
  };

  // userName: userObj.username

  const postStory = async() => {
    const story = { href, nasaTitle, nasa_id, keyWords, userTitle, bodyText, userName: "testUser", comments: [] };
    await axios.post('/routes/story', { story });
  };


  const evidenceProps = {
    haveEvidence,
    searchResults,
    fetchSearch,
    fetchImage,
    postStory,
    bodyText,
    setBodyText,
    handlePostBody,
    href,
    setHref,
    nasa_id,
    setNasa_id,
    nasaTitle, 
    setNasaTitle,
    keyWords, 
    setKeywords,
    handlePostTitle,
    userTitle, 
    setUserTitle
  };

  return (
    <EvidenceContext.Provider value={evidenceProps}>
      {children}
    </EvidenceContext.Provider>
  );
}

EvidenceContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};


export { EvidenceContext, EvidenceContextProvider };
