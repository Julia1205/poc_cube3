const db = require('../config/db'); // Import the database connection

async function getHomePage(req, res) {
  const howMany = parseInt(req.params.howMany);
  try{
    query = "SELECT * FROM articles  WHERE id >= (SELECT FLOOR(RAND() * (SELECT MAX(id) FROM articles))) ORDER BY id LIMIT ?;";
    db.query(query, [howMany], (err, result) => {
      if (err) {
        res.status(404).json({ error: err.message });
      }else{
        console.log('Articles récupérés:', result);
        res.status(200).json(result);
      }
    });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

module.exports = {
    getHomePage
};