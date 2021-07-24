const { Express, Router } = require('express');

const Images = Router();

const { getImagesFromNasa } = require('../helpers/getImages');

Images.use(Express.json());

// Images.get('api/images', (req, res) =>{

// });

Images.post('/', (req, res) => getImagesFromNasa(req.body)
    // eslint-disable-next-line arrow-body-style
    .then((data) => { return data ;})
    .then((data) => { res.status(200).send(data); })
    .catch((err) => {
      res.status(500).send('Database Error', err);
    }));


module.exports = { Images };

