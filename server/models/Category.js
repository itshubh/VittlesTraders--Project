const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
   name : {
       type : 'string',
       required : 'This field is required.'
   },
   image : {
    type : 'string',
    required : 'This field is required.'
   },
});
module.exports = mongoose.model('Category' , categorySchema);