const db = require('../config/db'); // Import the database connection
// console.log('controller');

function getAllArticles(req, res) {
  console.log('controller');
  try {
    const query = "SELECT * FROM articles;";
    db.query("SELECT * FROM articles;", (err, result) => {
      if (err) {
        console.log(err);
        res.status(404).json({ "cc":'bi' });
      } else {
        console.log('Articles récupérés:', result);
        res.status(200).json(result);
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function getArticleByID(req, res) {
    const articleId = parseInt(req.params.id, 10);
    if (isNaN(articleId)) {
      return res.status(400).json({ error: 'Invalid article ID' });
    }
    console.log(req.params);
    try {
      db.query('SELECT * FROM articles WHERE id = ?', [articleId], (err, result) => {
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

function getArticleByName(req, res) {
  const articleName = "%" + req.params.name + "%";
  console.log(articleName);
  try {
    const query = "SELECT * FROM articles WHERE name LIKE ?";
    console.log(query);
    db.query(query, [`%${articleName}%`], (err, result) => {
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

function getArticleByCategory(req, res){
    const category = req.params.id;
    try{
        query = "SELECT * FROM articles WHERE category_id = ?;";
        console.log(query);
        db.query(query, [category], (err, result) => {
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

function getArticleBySport(req, res){
    const sport = req.params.id;
    try{
        query = "SELECT * FROM articles WHERE sport_id = ?;";
        console.log(query);
        db.query(query, [sport], (err, result) => {
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

function deleteArticle(req, res){
    const articleId = req.params.id;
    const articleName = req.params.name;
    try {
        query = "DELETE FROM article WHERE id = ? AND name = ?";
        db.query(query, [articleId, articleName], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            }else{
                console.log('Article supprimé:', result);
                res.status(200).json({message: 'Article supprimé avec succès' });
            }
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }  
}

function updateArticle (req, res){
    const newName = req.params.newName;
    const updatedArticle = req.params.id;
    console.log(newName);
    console.log(updatedCategory);
    try {
        query = "UPDATE articles SET name = ? WHERE id = ?";
        db.query(query, [newName, updatedArticle], (err, result) => {
          if (err) {
            res.status(404).json({ error: err.message });
          }else{
            console.log('Article mis à jour:', result);
            res.status(200).json({message: 'Article mis à jour avec succès' });
          }
        }
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }  
}

function addArticle (req, res){
    const articleName = req.params.name;
    try{
        query = "INSERT INTO articles (name) VALUES (?)";
        db.query(query, [articleName], (err, result) => {
          if (err) {
            res.status(404).json({ error: err.message });
          }else{
            console.log('Article ajouté:', result);
            res.status(200).json({message: 'Article ajouté avec succès' });
          }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllArticles,
    getArticleByID,
    getArticleByName,
    getArticleByCategory,
    getArticleBySport,
    deleteArticle,
    updateArticle,
    addArticle
};