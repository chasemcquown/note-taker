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

// router.delete('/notes/:id', (req, res) => {
//   const params = [req.params.id];
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: res.message });
//       // checks if anything was deleted
//     } else if (!result.affectedRows) {
//       res.json({
//         message: 'Party not found'
//       });
//     } else {
//       res.json({
//         message: 'deleted',
//         changes: result.affectedRows,
//         id: req.params.id
//       });
//     }
//   });
// });

module.exports = router;