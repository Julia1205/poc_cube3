const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// const pool = mysql.createPool(db);

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

db.on('enqueue', function (sequence) {
  if (sequence.sql) {
      console.log('Dernière requête SQL exécutée:', sequence.sql);
  }
});

module.exports = db;