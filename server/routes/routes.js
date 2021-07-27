/* eslint-disable no-console */
const express = require('express');
const { Router } = require('express');

// const { Evidence } = require('../database/Evidence');
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
  Comment.findById(req.params.comment_id, (err, comment) => {
    if (err) {
      return res.send(err);
    }

    // eslint-disable-next-line no-unused-expressions
    (req.body.author) ? comment.author = req.body.author : null;
    // eslint-disable-next-line no-unused-expressions
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
  const { query } = req.body;
  // test data for nasaIdCall'GSFC_20171208_Archive_e000146'
  nasaIdCall(query)
    .then((data) => data)

    // {console.log(data.data.collection);}
    .then((data) => data.data.collection)
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.log('Error EVIDENCE.get', err);
    });
});

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
