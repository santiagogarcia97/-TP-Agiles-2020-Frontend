const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/ahorcado'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/ahorcado/index.html'));
});

/* PROXY */

app.listen(process.env.PORT || 5000);