// eslint-disable no-console

const { Router } = require('express');
const express = require('express');
// const axios = require('axios');

const Evidence = Router();

const { getImagesFromNasa, nasaIdCall } = require('../helpers/getImages');
// const { saveImage } = require('../database/index');
// const { retrieveImages } = require('../database/index');

Evidence.use(express.json());

// eslint-disable-next-line no-sequences
Evidence.post('/asset', (req, res) =>
// eslint-disable-next-line no-console
// eslint-disable-next-line no-undef
nasaIdCall('PIA01973')
  // eslint-disable-next-line no-console
  .then((data) => data)
  // eslint-disable-next-line no-lone-blocks
  .then((data) => {{console.log(data.data.collection);} return data.data.collection; })
  .then((data) => res.status(201).send(data))
  .catch((err) =>{
    // eslint-disable-next-line no-console
    console.log('Error EVIDENCE.get', err);
  }));

Evidence.post('/search', (req, res) =>
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
        // eslint-disable-next-line semi
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









Evidence.post('/', (req, res) =>
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

      module.exports = { Evidence };

      // );
      // // eslint-disable no-console
      // console.log(arr);
      // arr.forEach((item) => {
        //   axy.push(axios.get(item)
        //   );
        //   // console.log('This is', axy[0]);
      //   .then((data) =>{
      //     const arr = [];
      //     // const axy = [];
      //      data.collection.items.map(
      //       (item) => arr.push(item.href),
      //     );
      //     // eslint-disable-next-line no-console
      //     console.log('I am the data from images.post', arr);
      //     return arr;
      // })
      // .then((ret) =>ret.map((item) =>axios.get(item, (request, result) =>{
      //       // eslint-disable-next-line no-console
      //       console.log('data from then block calling', request)
      //       .then((data) =>Promise.all(data.map(saveImage)).catch((err)=>{
      //         // eslint-disable-next-line no-console
      //         console.log('ERROR THEN BLOCK', err);
      //       }));
      //     }))).then((finalData) =>{
      //   // eslint-disable-next-line no-console
      //   console.log('I am the final data', finalData);
      //   return finalData;
      // })
      // .then((data) => { return saveImage(data) ;})









      //  // );
      //     // // eslint-disable-next-line no-console
      //     // console.log(arr);
      //     // arr.forEach((item) => {
        //       //   axy.push(axios.get(item)
//       //   );
//       //   // console.log('This is', axy[0]);
//       .then((data) =>{
//         const arr = [];
//         // const axy = [];
//          data.collection.items.map(
//           (item) => arr.push(item.href),
//         );
//         // eslint-disable-next-line no-console
//         console.log('I am the data from images.post', arr);
//         return arr;
//     })
//     .then((ret) =>ret.map((item) =>axios.get(item, (request, result) =>{
//           // eslint-disable-next-line no-console
//           console.log('data from then block calling', request)
//           .then((data) =>Promise.all(data)).catch((err)=>{
//             // eslint-disable-next-line no-console
//             console.log('ERROR THEN BLOCK', err);
//           });
//         }))).then((finalData) =>{
//       // eslint-disable-next-line no-console
//       console.log('I am the final data', finalData);
//       return finalData;
//     })
