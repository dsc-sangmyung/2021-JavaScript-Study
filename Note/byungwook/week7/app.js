const express = require('express');
const app = express();
const port = 3000;

// rendering index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// static server
app.use('/public', express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});