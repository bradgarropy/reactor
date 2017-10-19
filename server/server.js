const express = require('express');
const path = require('path');


// create application
const app = express();


// middleware
app.use(express.static('dist'));


// all routes
app.get('*', (request, response) => {

    response.sendFile(path.join(__dirname, '../dist/index.html'));

});


// start application
app.listen(process.env.PORT, () => {

    console.log('Server listening on port %s.', process.env.PORT);

});
