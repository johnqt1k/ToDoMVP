var express = require('express');
var router = express.Router();

// Import the ids array from your app.test.js or wherever it's defined
const ids = [
  { id: 1, description: 'First ID' },
  { id: 2, description: 'Second ID' },
  { id: 3, description: 'Third ID' }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  // Pass the ids array to the view rendering
  res.render('index', { ids: ids });
});

module.exports = router;
