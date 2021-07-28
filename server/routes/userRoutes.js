const { Router } = require('express');
const { User } = require('../database/index');
const { Evidence } = require('../database/Evidence');

const userRouter = Router();

userRouter.post('/get/evidence', async (req, res) => {
  const { id, nasa_id } = req.body;
  // console.log(id, nasa_id);
  await Evidence.findOne({ nasa_id })
    .then(results => { console.log('RESULTS OBJ', results); return results; } )
    .then((data) =>
    User.findOneAndUpdate({_id: id}, { $push: { favorites: data }}, { new: true } )
    .then( user => {
    console.log('THIS IS THE UNPOPULATED USER', user);
    return User.findById(id).populate('favorites').exec((err, result) => {
      if(err){
        console.log(err);
      } else {
        console.log(result);
        result.save();
      }
    });
    }))
    // .then(updated => {console.log( 'this is the updated User', updated ); return updated;}))
    .catch(err => console.log('Evidence Error', err));
});


module.exports = {
  userRouter,
};
