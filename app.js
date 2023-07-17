const express = require('express');
const app = express();
const { products } = require('./data');



app.listen(5000, () => {
    console.log('Server is listening in port 5000...');
});