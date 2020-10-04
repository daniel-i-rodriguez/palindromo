
const express = require('express');
const app = express();

const {palindrome,aaa} = require('../controllers/palindrome_controller');



app.post('/palindrome',palindrome);
app.get('/calis',aaa);


module.exports = app;