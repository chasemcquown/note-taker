const router = require('express').Router();

const { validateNote, createNewNote } = require('../../lib/notes');

const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    if (!validateNote(req.body)) {
      res.status(400).send('Note not added.');
    } else {
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
});

module.exports = router;