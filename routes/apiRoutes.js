const fs = require("fs");
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        res.json(JSON.parse(data))
    });
  });
  // This API route is a POST Route for a new note
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
    let temp = JSON.parse(fs.readFileSync('./db/db.json'));
    //const { title, text } = req.body;
    //if (req.body) {
      const newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text,
        // tip_id: uuid(),
      };
      temp.push(newNote);
      fs.writeFile("./db/db.json", JSON.stringify(temp), err => {
        res.json(temp);
      });
     
    /*} else {
      res.error('Error in adding note');
    }*/
  });

  module.exports = router;
