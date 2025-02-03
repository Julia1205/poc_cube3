const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
// const db = require('./config/db'); // Importez la configuration de la base de données

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});