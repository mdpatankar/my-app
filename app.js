const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Welcome to IBN Cloud Pack - part 2!");
});
 
module.exports.app = app;
