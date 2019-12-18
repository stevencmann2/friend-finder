//REQUIRE EXPRESS
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const path = require('path');

app.get('/', (request, response) =>
    response.send('Hello Worldz!'));

app.listen(PORT, () =>
    console.log(`The server is listening on port ${PORT}!`));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());