const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/:id', (req, res) => {
    const { id } = req.params;
    const cat = cats.find(c => c.id === id);
    res.send(cat);
  })
  .get('/', (req, res) => { 
    const newCats = cats.map(cat => {
        return {
            id: cat.id,
            name: cat.name,
        };});
    res.json(newCats);
  });
