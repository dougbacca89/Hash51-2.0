/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const { Router } = require('express');

const { Evidence } = require('../database/Evidence');
const { Comment } = require('../database/Comment');

const serverRouter = Router();
serverRouter.use(express.json());

const { getImagesFromNasa, nasaIdCall } = require('../helpers/getImages');

serverRouter.get('/', (req, res) => {
  res.json({ message: 'API Initialized!' });
});

serverRouter.get('/comments', (req, res) => {
  Comment.find((err, comment) => {
    if (err) {
      return res.send(err);
    }
    return res.json(comment);
  });
});

serverRouter.post('/comments', (req, res) => {
  const comment = new Comment();
  comment.userId = req.body.userId;
  comment.text = req.body.text;
  comment.author = req.body.author;
  comment.imageId = req.body.imageId;

  comment.save((err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'comment successfylly added' });
  });
});

serverRouter.put('/comments/:comment_id', (req, res) => {
  // eslint-disable-next-line consistent-return
  Comment.findById(req.params.comment_id, (err, comment) => {
    if (err) {
      return res.send(err);
    }

    // eslint-disable-next-line no-param-reassign
    (req.body.author) ? comment.author = req.body.author : null;

    (req.body.text) ? comment.text = req.body.text : null;

    comment.save((error)=> {
      if (err) { res.send(error); }
      return res.json({ message: 'comment was updated successfully'});

    });
  });
});


serverRouter.delete('/comments/:comment_id', (req, res) => {
  Comment.remove({_id: req.params.comment_id }, (err, comment) => {
    if (err) {
      return res.send(err);
    }
    return res.json({ message: 'comment was deleted successfully!'});
  });
});


serverRouter.post('/', (req, res) =>
  getImagesFromNasa('saturn')
    .then(({ data }) => {
      // eslint-disable-next-line no-console
      console.log(data.collection.items[0].data);
      return data;
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

serverRouter.post('/asset', (req, res) => {
  // const { query } = req.body;
  // test data for
  nasaIdCall('PIA20506')
  // nasaIdCall(query)
    .then((data) => {console.log('data', data); return data; })
    // {console.log(data.data.collection);}
    .then((data) => data.data.collection)
    .then((data) => { console.log('data', data); res.status(201).send(data);})
    .catch((err) => {
      console.log('Error EVIDENCE.get', err);
    });
});

serverRouter.post('/story', (req, res) =>{
  console.log(req.body);
  const evidence = new Evidence();
  evidence.textBody = req.body.textBody;
  evidence.userName = req.body.userName;
  evidence.originalEvidence = req.body.originalEvidence;

  evidence.save((err) => {
    if (err) {res.send(err);}
  });
});
// .then((data) => {
//   const evidence = new Evidence();
//   evidence.originalEvidence = data.items[0].href;
//   // evidence.imageThumb = data.items[]
//   evidence.save((err) => {
//     if (err) {
//       res.send(err);
//     }
//     // res.json({ message: 'comment successfylly added' });
//   });
//   return data;
// })


serverRouter.post('/search', (req, res) => {
  const { query } = req.body;
  getImagesFromNasa(query)
    .then(({ data }) => data)
    .then((data) => {
      const parsedData = data.collection.items.map((result) => {
        const resultObj = {
          nasa_id: result.data[0].nasa_id,
          title: result.data[0].title,
          created: result.data[0].date_created,
          keywords: result.data[0].keywords,
          thumb: result.links[0].href,
        };
        return resultObj;
      });
      return parsedData;
    })
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// serverRouter.put();

// serverRouter.delete();

module.exports = {
  serverRouter,
};
