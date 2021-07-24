const { Router } = require('express');

const Images = Router();

const { getImagesFromNasa } = require('../helpers/getImages');



// Images.get('api/images', (req, res) =>{

// });

Images.post('/', (req, res) => getImagesFromNasa(req.body)
    // eslint-disable-next-line arrow-body-style
    // eslint-disable-next-line no-console
    .then((data) => { console.log(data) ;})
    .then((data) => { res.status(201).send(data); })
    .catch(() => {
      res.sendStatus(500);
    }));


module.exports = { Images };

