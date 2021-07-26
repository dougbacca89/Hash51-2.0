const { Router } = require('express');
const express = require('express');
const axios = require('axios');

const Images = Router();

const { getImagesFromNasa } = require('../helpers/getImages');

Images.use(express.json());
// const { saveImage } = require('../database/index');

// Images.get('/', (req, res) =>{
//   return
// });

Images.post('/', (req, res) =>
  getImagesFromNasa(req.body)
    .then(({ data }) => data)
    // );
    // // eslint-disable-next-line no-console
    // console.log(arr);
    // arr.forEach((item) => {
      //   axy.push(axios.get(item)
      //   );
      //   // console.log('This is', axy[0]);
      .then((data) =>{
        const arr = [];
        // const axy = [];
         data.collection.items.map(
          (item) => arr.push(item.href),
        );
        // eslint-disable-next-line no-console
        console.log('I am the data from images.post', arr);
        return arr;
    })
    .then((ret) =>ret.map((item) =>axios.get(item, (request, result) =>{
          // eslint-disable-next-line no-console
          console.log('data from then block calling', request)
          .then((data) =>Promise.all(data)).catch((err)=>{
            // eslint-disable-next-line no-console
            console.log('ERROR THEN BLOCK', err);
          });
        }))).then((finalData) =>{
      // eslint-disable-next-line no-console
      console.log('I am the final data', finalData);
      return finalData;
    })
    // .then((data) => { return saveImage(data) ;})
    .then((data) => {
      res.status(201).send(data);
    })
    .catch(() => {
      res.sendStatus(500);
    }));

module.exports = { Images };
