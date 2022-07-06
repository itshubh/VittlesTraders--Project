const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGODB_URI , {useNewUrlParser : true , useUnifiedTopology : true});


mongoose.connect("mongodb://localhost/vittles-traders" , {useNewUrlParser : true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log('Connected')
// });

mongoose.connection
   .once("open" , ()=> console.log("Connected"))
   .on("error", (error) => {
     console.log("Your error : " ,error);
   })

require('./Category');
require('./requests');
require('./dryFruits');