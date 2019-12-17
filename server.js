//REQUIRE EXPRESS
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/', (request, response) =>
    response.send('Hello Worldz!'));

app.listen(PORT, () =>
    console.log(`The server is listening on port ${PORT}!`));