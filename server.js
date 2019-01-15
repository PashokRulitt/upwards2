const express = require('express');
const port = process.env.PORT || 5000;
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/frontend/'+'/dist/'));
app.get(/.*/, function (req, res) {
    res.sendfile(path.join(__dirname, 'frontend','dist', 'index.html'))
});
app.listen(port);

console.log('Sterted.....');
