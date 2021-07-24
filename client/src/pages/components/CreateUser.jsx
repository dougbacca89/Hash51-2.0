import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CreateUser = props => {
  const { updateUserClick } = props;
  
  return (
    <div>
      Username:<input id='userName' placeholder="Enter user name" /><br/>
      Password:<input placeholder="Enter password" /><br/>
      Verify password:<input placeholder="Retype password" /><br/>
      
      <Link to='/story'>
        <button type='button' onClick={() => {updateUserClick(document.getElementById('userName').value);}}>
          Create
        </button>
      </Link>
    </div>
  );
};

  CreateUser.propTypes = {
    updateUserClick: PropTypes.isRequired,
  };
export default CreateUser;
