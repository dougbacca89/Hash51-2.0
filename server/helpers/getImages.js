const axios = require('axios');


const getImagesFromNasa = () => {


  // https://images-api.nasa.gov/search?q=&{query}&media_type=image

  const options = {
    url: `https://images-api.nasa.gov/search?q=saturn&media_type=image`,
    headers: {
      'User-Agent': 'request',
    },
  };

  return axios(options)
    .then((response) => response)
    .catch((error) =>{
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

module.exports.getImagesFromNasa = getImagesFromNasa;
