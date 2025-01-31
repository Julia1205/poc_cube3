const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(
//     {
//     origin: 'http://localhost:8080',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
//   }
));
// Set up routes
app.use('/backend', routes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Erreur serveur');
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});