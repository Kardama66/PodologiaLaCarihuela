const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();

const sslOptions = {
  key: fs.readFileSync('/path/to/private-key.pem'),
  cert: fs.readFileSync('/path/to/certificate.pem')
};

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

https.createServer(sslOptions, app).listen(443, () => {
  console.log('Server is running on https://localhost:443');
});
