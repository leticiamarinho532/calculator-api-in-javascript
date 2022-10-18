const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, respose) => {
    respose.send({'message': 'Hello World Test'});
});

module.exports = {
    app
};