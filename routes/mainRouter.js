let express = require('express');
let path = require('path');
let mainRouter = express.Router();

mainRouter.get('/',  (req, res) => {

	res.render(path.join(__dirname,'../public/templates/','welcome.html'));
});


module.exports = mainRouter ;