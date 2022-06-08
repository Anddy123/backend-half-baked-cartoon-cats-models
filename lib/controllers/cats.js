const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const cat = await Cat.findOne(id);
    res.send(cat);
  })
  .get('/', async (req, res) => { 
    const Cats = await Cat.getAll();
    const newCats = Cats.map(cat => {
      return {
        id: cat.id,
        name: cat.name,
      };
    });
    res.json(newCats);
  });
