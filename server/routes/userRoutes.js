/* eslint-disable no-console, camelcase, no-underscore-dangle, no-unused-vars */

const { Router } = require('express');
const { User } = require('../database/index');
const { Evidence } = require('../database/Evidence');

const userRouter = Router();

userRouter.post('/store/favorites', async (req, res) => {
  const { id, nasa_id } = req.body;
  // console.log(id, nasa_id);
  await Evidence.findOne({ nasa_id })
    .then(results => { console.log('RESULTS OBJ', results); return results; } )
    .then((data) => User.findOneAndUpdate({_id: id}, { $push: { favorites: data }}, { new: true }))
    .catch(err => console.log('Evidence Error', err));
});

userRouter.post('/pop/favorites', async (req, res) => {
  const { id } = req.body;
  await User.findById(id).populate('favorites').exec(
    async (err, result) => {
    if(err){
      console.log(err);
    } else {
      result.save();
    }
  });
});

userRouter.get('/get/favorites', (req, res) => {
  if(req.user){
  User.findById(req.user._id)
  .then(user => {
    const favorites = user.favorites.map( objId => Evidence.findOne({_id: objId }).exec());
    return Promise.all(favorites);
  }).then((favorites) => {
  res.status(200).send(favorites.reverse());
})
.catch(err => console.log(err));
}});



module.exports = {
  userRouter,
};
