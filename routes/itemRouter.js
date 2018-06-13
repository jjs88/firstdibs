const express = require('express');
const cachedItems = require('../data/items.json');
const fs = require('fs');
const util = require('util');
const fs_writeFile = util.promisify(fs.writeFile);
const itemRouter = express.Router();

const getItem = function (itemId) {
    return cachedItems.find(function (item) {
        return item.id === itemId || item.integerId === itemId;
    }) || {};
};

itemRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const item = getItem(id);
    res.status(200).json(item);
});

//new POST route
itemRouter.post('/post', (req, res) => {
  const { id } = req.body;
  const dir = __dirname + '/../data/items.json';
  //read from file and flip the favorite flag from true/false
  fs.readFile(dir, 'utf8', (err, data) => {
    const items = JSON.parse(data);
    const [item] = items.filter(item => item.id === id);
    if(!item) {
      res.status(404).send({err: 'item not found'});
    };
    //change fav
    item.favorite = item.favorite ? false:true;
    const pos = items.findIndex(fav => fav.id === item.id);
    //find the correct item and make sure it gets updated before saving file
    fs_writeFile(dir, JSON.stringify(Object.assign([...items], {[pos]: item})))
      .catch(err => res.send({err})); 
    //respond back with new data/mod data  
    res.send(item);
  });
})

module.exports = itemRouter;


