const express = require('express');
const router = require('./src/routes/index.js')

const app = express();
const port = 5000;
app.use(express.json());
app.use('/api/v1/', router);
app.use('/public', express.static("public"));


app.listen(port, () => console.log(`Server Runinnging on Port ${port}`))