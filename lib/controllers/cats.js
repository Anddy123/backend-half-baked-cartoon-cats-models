const { Router } = require('express');
const { cats } = require('../../data/cats');
const Cat = require('../models/Cat');

module.exports = Router()
  .get('/:id', (req, res) => {
    const { id } = req.params;
    const cat = cats.find(c => c.id === id);
    res.send(cat);
  })
  .get('/', async (req, res) => { 
    const Cats = await Cat.getAll();
    console.log(Cats, 'hi from controller');
    res.json(Cats);
  });
