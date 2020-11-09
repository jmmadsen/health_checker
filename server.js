const express = require('express');
const app = express();


app.listen(8080, () => console.log("heatlh check is live!"));

app.get('/healthFail', (req, res, next) => {
  console.log({
    time: new Date(),
    url: req.url,
    status: req.url === '/healthFail' ? 500 : 200
  })
  res.sendStatus(500);
})

app.get('/healthSuccess', (req, res, next) => {
  console.log({
    time: new Date(),
    url: req.url,
    status: req.url === '/healthFail' ? 500 : 200
  })
  res.sendStatus(200);
})