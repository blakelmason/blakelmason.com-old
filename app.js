const express = require('express');
const path = require('path');
const app = express();

var PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, function () {
  console.log('Our app is running on http://localhost:' + PORT);
});