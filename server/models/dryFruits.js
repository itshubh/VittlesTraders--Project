const mongoose = require('mongoose');

const dryFruitsSchema = new mongoose.Schema({
   name : {
       type : 'string',
       required : 'This field is required.'
   }, 
   description : {
    type : 'string',
    required : 'This field is required.'
}, 
   nutrition : {
    type : 'Array',
    required : 'This field is required.'
}, 
   category : {
    type : 'string',
    enum : ["dates","almonds","makhana","cashew","pista"],
    required : 'This field is required.'
}, 
   image : {
    type : 'string',
    required : 'This field is required.'
   },
});

dryFruitsSchema.index({name : 'text' ,description : 'text'});
module.exports = mongoose.model('dryFruitsSchema' , dryFruitsSchema);