const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Welcome to IBN Cloud Pack for Applications !");
});

module.exports.app = app;
