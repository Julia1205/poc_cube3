const db = require('../config/db'); // Import the database connection

function getAllVariants (req, res){
    try{
        query = "SELECT * FROM variants;";
        db.query(query, (err, result) => {
            if (err) {
              res.status(404).json({ error: err.message });
            }else{
              console.log('Variants récupérés:', result);
              res.status(200).json(result);
            }
          });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }


function getVariantByID (req, res){
    const articleId = req.params.id;
    console.log(req.params);
    try {
        db.query('SELECT * FROM variants WHERE id = ?', [articleId], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                console.log('Variant retrieved:', result);
                res.status(200).json(result);
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function getVariantByName (req, res) {
    const articleName = "%" + req.params.name + "%";
    console.log(articleName);
    try{
        query = "SELECT * FROM variants WHERE name LIKE ?;";
        console.log(query);
        db.query(query, [articleName], (err, result) => {
            if(err){
                res.status(404).json({error: err.message});
            }else{
                console.log('Variant retrived:', result);
                res.status(200).json(result);
            }
        });
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

function getVariantByCategory(req, res){
    const category = req.params.id;
    try{
        query = "SELECT * FROM variants WHERE category_id = ?;";
        console.log(query);
        db.query(query, [category], (err, result) => {
            if(err){
                res.status(404).json({error: err.message});
            }else{
                console.log('Variant retrived:', result);
                res.status(200).json(result);
            }
        });
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

function getVariantBySport(req, res){
    const sport = req.params.id;
    try{
        query = "SELECT * FROM variants WHERE sport_id = ?;";
        console.log(query);
        db.query(query, [sport], (err, result) => {
            if(err){
                res.status(404).json({error: err.message});
            }else{
                console.log('Variant retrived:', result);
                res.status(200).json(result);
            }
        });
    } catch (error){
        res.status(500).json({error: error.message});
    }

}

function deleteVariant(req, res){
    const variantId = req.params.id;
    const variantName = req.params.name;
    try {
        query = "DELETE FROM variants WHERE id = ? AND name = ?";
        db.query(query, [variantId, variantName], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            }else{
                console.log('Variant supprimé:', result);
                res.status(200).json({message: 'Variant supprimé avec succès' });
            }
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }  
}

function updateVariant (req, res){
    const newName = req.params.newName;
    const updatedVariant = req.params.id;
    console.log(newName);
    console.log(updatedCategory);
    try {
        query = "UPDATE variants SET name = ? WHERE id = ?";
        db.query(query, [newName, updatedVariant], (err, result) => {
          if (err) {
            res.status(404).json({ error: err.message });
          }else{
            console.log('Variant mis à jour:', result);
            res.status(200).json({message: 'Variant mis à jour avec succès' });
          }
        }
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }  
}

function addVariant (req, res){
    const variantName = req.params.name;
    try{
        query = "INSERT INTO variants (name) VALUES (?)";
        db.query(query, [variantName], (err, result) => {
          if (err) {
            res.status(404).json({ error: err.message });
          }else{
            console.log('Variant ajouté:', result);
            res.status(200).json({message: 'Variant ajouté avec succès' });
          }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllVariants,
    getVariantByID,
    getVariantByName,
    getVariantByCategory,
    getVariantBySport,
    deleteVariant,
    updateVariant,
    addVariant
};