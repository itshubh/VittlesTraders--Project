const express = require('express');
const expressLayouts = require('express-ejs-layouts');
//const fileUpload  = require('express-fileupload'); 
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express();

const port = process.env.port || 3000;

require('dotenv').config();

app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));
app.use(expressLayouts);
app.use(cookieParser('VittleTradersSecure'))
app.use(session({
    secret : 'vittleTradersSecretSession',
    saveUninitialized: true,
    resave : true
}))
app.use(flash());

app.set('layout' , './layouts/main');
app.set('view engine' , 'ejs');

const routes = require('./server/routes/fruitsRoutes.js');
app.use('/',routes);

app.listen(port,() => console.log(`listening to port ${port}`));