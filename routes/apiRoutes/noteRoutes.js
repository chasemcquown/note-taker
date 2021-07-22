const router = require('express').Router();

const { notes } = require('../../db/db');

router.get('/db', (req, res) => {

    let results = notes;

    res.json(results);

});