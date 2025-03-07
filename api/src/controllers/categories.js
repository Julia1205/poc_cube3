const db = require('../config/db'); // Import the database connection

function getAllCategories (req, res){
    try{
        query = "SELECT * FROM categories;";
        db.query(query, (err, result) => {
            if (err) {
              res.status(404).json({ error: err.message });
            }else{
              console.log('Catégories récupérés:', result);
              res.status(200).json(result);
            }
          });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }


function getCategoryByID (req, res){
    const articleId = req.params.id;
    console.log(req.params);
    try {
        db.query('SELECT * FROM categories WHERE id = ?', [articleId], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                console.log('Article retrieved:', result);
                res.status(200).json(result);
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function getCategorieByName (req, res) {
    const articleName = "%" + req.params.name + "%";
    console.log(articleName);
    try{
        query = "SELECT * FROM categories WHERE name LIKE ?;";
        console.log(query);
        db.query(query, [articleName], (err, result) => {
            if(err){
                res.status(404).json({error: err.message});
            }else{
                console.log('Article retrived:', result);
                res.status(200).json(result);
            }
        });
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

function deleteCategorie(req, res){
    const articleId = req.params.id;
    const articleName = req.params.name;
    try {
        query = "DELETE FROM categories WHERE id = ? AND name = ?";
        db.query(query, [articleId, articleName], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            }else{
                console.log('Categorie supprimé:', result);
                res.status(200).json({message: 'Categorie supprimée avec succès' });
            }
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }  
}

function updateCategory (req, res){
    const newName = req.params.newName;
    const updatedArticle = req.params.id;
    console.log(newName);
    console.log(updatedCategory);
    try {
        query = "UPDATE categories SET name = ? WHERE id = ?";
        db.query(query, [newName, updatedArticle], (err, result) => {
          if (err) {
            res.status(404).json({ error: err.message });
          }else{
            console.log('Catégorie mise à jour:', result);
            res.status(200).json({message: 'Catégorie mise à jour avec succès' });
          }
        }
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }  
}

function addCategory (req, res){
    const articleName = req.params.name;
    try{
        query = "INSERT INTO categories (name) VALUES (?)";
        db.query(query, [articleName], (err, result) => {
          if (err) {
            res.status(404).json({ error: err.message });
          }else{
            console.log('Catégorie ajouté:', result);
            res.status(200).json({message: 'Catégorie ajouté avec succès' });
          }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
  getAllCategories,
  getCategoryByID,
  getCategorieByName,
  deleteCategorie,
  updateCategory,
  addCategory
};