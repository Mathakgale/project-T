'use strict'

let path = require('path');
let express = require('express');
let mainRouter= require('./routes/mainRouter');
const mongoose = require('mongoose');
let app = express();
const nunjucks = require('nunjucks');


app.use(express.static(path.join(__dirname, 'public')))

// ------initializing nunjucks templating engine
app.set('view engine', 'html')
nunjucks.configure(['public/templates/'], {
  autoescape: true,
  express: app
})

app.set('view engine', 'html')

app.use(mainRouter)

let port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server running on port", port);


// https://bgjar.com/animated-shape