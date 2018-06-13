const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));


if(process.env.NODE_ENV === 'production') {
  //express will serve up production assets
  app.use(express.static('client/build'));
  //express will serve up the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});