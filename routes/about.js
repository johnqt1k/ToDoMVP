var express = require('express');
var router = express.Router();

//Array för alla olika tasks
const tasks = [
  { desc: "Hello", id: 1 },
  { desc: "Hello 2", id: 2 },
  { desc: "Hello 3", id: 3 },
  { desc: "Hello 4", id: 4 },
  { desc: "Hello 5", id: 5 },
  { desc: "Hello 6", id: 6 },
  { desc: "Hello 7", id: 7 },
  { desc: "Hello 8", id: 8 }
];

//Skriv ut alla tasks i arrayren
router.get('/', function(req, res, next) {
  res.json(tasks);
});

//Skapa en sida för varje ID
router.get('/:id', function(req, res, next) {
 const id = req.params.id;
const task = tasks.find(task => task.id == id);
res.json(task);
  });

//Skapa ett nytt ID
router.post('/add-id', function(req, res, next) {
  const newIdDescription = req.body.idDescription;
  const newId = {
    desc: newIdDescription,
    id: tasks.length + 1 
  };
  

  tasks.push(newId);
  res.redirect('/');
});

  
module.exports = router;
module.exports.tasks = tasks;