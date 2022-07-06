const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
   email : {
       type : 'string',
       required : 'This field is required.'
   },
   name : {
    type : 'string',
    required : 'This field is required.'
   },
   description: {
    type : 'string',
    required : 'This field is required.'
   },
   category : {
    type : 'string',
    enum : ['Dates , Almonds ,Makhana, Cashew , Pista '],
    required : 'This field is required.'
},
});
module.exports = mongoose.model('requests' , requestSchema);