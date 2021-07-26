const { Router } = require('express');
const express = require('express');
// const axios = require('axios');

const Evidence = Router();

const { getImagesFromNasa } = require('../helpers/getImages');
// const { saveImage } = require('../database/index');
// const { retrieveImages } = require('../database/index');

Evidence.use(express.json());

// Images.get('/', (req, res) =>
//   // eslint-disable-next-line no-console
//   console.log(req.body)
//   // retrieveImages()
//     .then(() => {
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       res.sendStatus(404);
//     })
// );

Evidence.post('/', (req, res) =>
  getImagesFromNasa(req.body)
    .then(({ data }) => data)
    .then((data) => {
      const arr = [];
      data.collection.items.map((item) => arr.push(item.links));
      return arr;
    })
    .then((data) => {
      const ary = [];
      data.map((item) => ary.push(item[0].href));
      // eslint-disable-next-line no-console
      // console.log('data from then block', data);
      return ary;
    })
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
