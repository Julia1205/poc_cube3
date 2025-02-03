const db = require('../config/db'); // Import the database connection

function getAllSports (req, res){
    try{
        query = "SELECT * FROM sports;";
        db.query(query, (err, result) => {
            if (err) {
              res.status(404).json({ error: err.message });
            }else{
              console.log('Sports récupérés:', result);
              res.status(200).json(result);
            }
          });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }


function getSportByID (req, res){
    const articleId = req.params.id;
    console.log(req.params);
    try {
        db.query('SELECT * FROM sports WHERE id = ?', [articleId], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                console.log('Sport retrieved:', result);
                res.status(200).json(result);
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function getSportByName (req, res) {
    const sportName = "%" + req.params.name + "%";
    console.log(articleName);
    try{
        query = "SELECT * FROM sports WHERE name LIKE ?;";
        console.log(query);
        db.query(query, [articleName], (err, result) => {
            if(err){
                res.status(404).json({error: err.message});
            }else{
                console.log('Sport retrived:', result);
                res.status(200).json(result);
            }
        });
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

function deleteSport(req, res){
    const articleId = req.params.id;
    const articleName = req.params.name;
    try {
        query = "DELETE FROM sports WHERE id = ? AND name = ?";
        db.query(query, [articleId, articleName], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            }else{
                console.log('Sport supprimé:', result);
                res.status(200).json({message: 'Sport supprimé avec succès' });
            }
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }  
}

function updateSport (req, res){
    const newName = req.params.newName;
    const updatedSport = req.params.id;
    console.log(newName);
    console.log(updatedCategory);
    try {
        query = "UPDATE sports SET name = ? WHERE id = ?";
        db.query(query, [newName, updatedSport], (err, result) => {
          if (err) {
            res.status(404).json({ error: err.message });
          }else{
            console.log('Sport mise à jour:', result);
            res.status(200).json({message: 'Sport mis à jour avec succès' });
          }
        }
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }  
}

function addSport (req, res){
    const articleName = req.params.name;
    try{
        query = "INSERT INTO sports (name) VALUES (?)";
        db.query(query, [articleName], (err, result) => {
          if (err) {
            res.status(404).json({ error: err.message });
          }else{
            console.log('Sport ajouté:', result);
            res.status(200).json({message: 'Sport ajouté avec succès' });
          }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
  getAllSports,
  getSportByID,
  getSportByName,
  deleteSport,
  updateSport,
  addSport
};