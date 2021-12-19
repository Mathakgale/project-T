'use strict'

let path = require('path');
let express = require('express');
let mainRouter= require('./routes/mainRouter');

let app = express();

app.use(mainRouter);

app.listen(3000);
console.log("Express server running on port 3000");
