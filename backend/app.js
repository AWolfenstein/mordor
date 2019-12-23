const express = require('express');
const routes = require('./routes/index');
const authRoute = require('./routes/auth');
const addfanficRoute =require('./routes/addfanficRoute');
const myfanficRoute =require('./routes/myfanficRoute');
const readRoute=require('./routes/readRoute');
const adminRoute=require('./routes/adminRoute');
const homeRoute =require('./routes/homeRoute');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser');
const passport = require('passport');
const authCheckMiddleware = require('./middleware/authCheck');
const Category = require("./models/Category");

require('dotenv').config();

let app = express();
const PORT = process.env.PORT || 3002;

const dbURL = 'mongodb://localhost:27017';

mongoose.connect(dbURL, function(err){
  if(err){
    console.log('Error connecting to: '+ dbURL)
  }
  else{
    console.log('Connected to: '+ dbURL)
  }
})
//let newvalue = new Category({"ids":"CategoryBase","category":["Anime_and_manga","Books","Cartoons","Games","Films_and_TV_shows","Comics","Other"]});
//newvalue.save();
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.use('/user', authRoute);


app.use('/addfanfic', addfanficRoute);
app.use('/home',homeRoute)


app.use('/read/:id/newcomment', authCheckMiddleware);
app.use('/read',readRoute)
app.use('/myfanfics',myfanficRoute)

app.use('/admin/:id/unadminuser', authCheckMiddleware);
app.use('/admin/:id/adminuser', authCheckMiddleware);
app.use('/admin/:id/unbanuser', authCheckMiddleware);
app.use('/admin/:id/banuser', authCheckMiddleware);
app.use('/admin/:id/removeuser', authCheckMiddleware);
app.use('/admin/loadusers', authCheckMiddleware);
app.use('/admin',adminRoute)


if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



app.listen(PORT, function () {
	console.log(`Listening on port ${PORT}`);
});