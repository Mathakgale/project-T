let express = require('express');
let path = require('path');
let mainRouter = express.Router();

mainRouter.get('/',  (req, res) => {

	res.sendFile(path.join(__dirname,'../puplic/templates','welcome.html')); //\puplic\templates
});

module.exports = mainRouter ;