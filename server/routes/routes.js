const express = require('express');
const { Router } = require('express');


const serverRouter = Router();
serverRouter.use(express.json());

const { getImagesFromNasa, nasaIdCall } = require('../helpers/getImages');


// serverRouter.get();


serverRouter.post('/', (req, res) =>
  getImagesFromNasa('saturn')
    .then(({ data }) => {
      // eslint-disable-next-line no-console
      console.log(data.collection.items[0].data);
      return data; })
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log('data from then block', data);
        // .then((data) => { return saveImage(data) ;})
        res.status(201).send(data);
      })
      .catch(() => {
        res.sendStatus(500);
      })
      );


serverRouter.post('/asset', (req, res) =>
nasaIdCall('PIA01973')
  .then((data) => data)
  // eslint-disable-next-line no-lone-blocks
  // eslint-disable-next-line no-console
  // eslint-disable-next-line no-lone-blocks
  // {console.log(data.data.collection);}
  .then((data) => data.data.collection)
  .then((data) => res.status(201).send(data))
  .catch((err) =>{
    // eslint-disable-next-line no-console
    console.log('Error EVIDENCE.get', err);
  }));


  serverRouter.post('/search', (req, res) =>
getImagesFromNasa('saturn')
  .then(({ data }) =>  data )
    .then(data => {
      const parsedData = data.collection.items.map( result => {
        const resultObj = {
          nasa_id: result.data[0].nasa_id,
          title: result.data[0].title,
          created: result.data[0].date_created,
          keywords: result.data[0].keywords,
          thumb: result.links[0].href
        };
        // eslint-disable-next-line no-console
        console.log(resultObj);
        return resultObj;
      });
      return parsedData;
    })
    .then(data => res.status(201).send(data))
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.sendStatus(500);
    }));


// serverRouter.put();


// serverRouter.delete();


module.exports = {
  serverRouter,
};
