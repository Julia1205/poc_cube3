const db = require('../config/db'); // Import the database connection

/**
 * Récupère toutes les catégories de la base de données
 */
function getAllCategories(req, res) {
    try {
      db.query('SELECT * FROM cat_categories', (err, result) => {
        if (err) {
          res.status(404).json({ error: err.message });
        }else{
          console.log('Catégories récupérées:', result);
          res.status(200).json(result);
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}


function createCategory(req, res) {
    const categoryName = req.params.category;
    try {
      db.query(
        'INSERT INTO cat_categories (cat_category_name) VALUES(?)',
        [categoryName],
        (err, result) => {
          if (err) {
            res.status(404).json({ error: err.message });
          }else{
            console.log('Catégorie créée', result);
            res.status(200).json({message: 'Catégorie créée avec succès' });
          }
        }
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

function updateCategory(req, res) {
  const newName = req.params.newName;
  const updatedCategory = req.params.id;
  console.log(newName);
  console.log(updatedCategory);
  try {
    db.query(
      'UPDATE cat_categories SET cat_category_name = ? WHERE cat_category_id = ?',
      [newName, updatedCategory],
      (err, result) => {
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

function deleteCategory(req, res) {
  const categoryId = req.params.id;
  try {
    db.query(
      'DELETE FROM cat_categories WHERE cat_category_id = ?',
      [categoryId],
      (err, result) => {
        if (err) {
          res.status(404).json({ error: err.message });
        }else{
          console.log('Catégorie supprimée:', result);
          res.status(200).json({message: 'Catégorie supprimée avec succès' });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
};