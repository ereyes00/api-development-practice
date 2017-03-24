const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const db = require('./models');


app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('../front/public'));


app.use('/people', require('./routes'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/views/index.html'));
});

db.sequelize.sync().then(() => {
  console.log('Listening on port 9999');
  app.listen(9999);
});
