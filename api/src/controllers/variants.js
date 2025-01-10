const db = require('../config/db'); //Import database connection

function getAllVariants(req, res) {
    try {
        db.query('SELECT * FROM a_variants', (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                console.log('Items retrieved:', result);
                res.status(200).json(result);
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function getVariantById(req, res) {
    const itemId = req.params.id;
    try {
        db.query('SELECT * FROM a_variants WHERE a_variants = ?', [itemId], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                console.log('Item retrieved:', result);
                res.status(200).json(result);
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function getVariantsByCategory(req, res) {
    const categoryId = req.params.category;
    try {
        query = "SELECT * FROM a_variants WHERE a_variants_article = ?";
        db.query(query, [categoryId], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                console.log(result);
                console.log('Items retrieved:', result);
                res.status(200).json(result);
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function getVariantByName(req, res) {
    const itemName = req.params.name;
    try {
        db.query("SELECT * FROM a_articles WHERE a_variants_name LIKE %?%", [itemName], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                console.log('Item retrieved:', result);
                res.status(200).json(result);
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

function updateVariant(req, res){
    const variantId = req.params.id;
    const variantName = req.params.newName;
    const variantPrice = req.params.newPrice;
    const variantDesc = req.params.newDesc;
    const variantArticle = req.params.newArticle;
    const variantImage = req.params.newImage;
    const variantStock = req.params.newStock;
    try {
        query = "UPDATE a_variants SET a_variants_name=?, a_variants_price=?, a_variants_description=?, a_variants_article=?, a_variants_image=?, a_variants_stock=? WHERE a_variants_id = ?";
        db.query(query, [variantName, variantPrice, variantDesc, variantArticle, variantImage, variantStock, variantId], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                console.log('Item updated:', result);
                res.status(200).json({message: 'Item updated successfully'});
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function deleteVariant(req, res){
    const variantId = req.params.id;
    try {
        db.query('DELETE FROM a_variants WHERE a_variants_id = ?', [variantId], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                console.log('Item deleted:', result);
                res.status(200).json({message: 'Item deleted successfully'});
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function createVariant(req, res){
    const variantName = req.params.name;
    const variantPrice = req.params.price;
    const variantDesc = req.params.desc;
    const variantArticle = req.params.article;
    const variantImage = req.params.image;
    const variantStock = req.params.stock;
    // const variantId = 'NULL';
    console.log(variantArticle);
    // console.log(variantId);
    try {
        query = "INSERT INTO a_variants (a_variants_name, a_variants_price, a_variants_description, a_variants_article, a_variants_image, a_variants_stock) VALUES(?,?,?,?,?,?)";
        db.query(query, [variantName, variantPrice, variantDesc, variantArticle, variantImage, variantStock],
            (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                console.log('Item created:', result);
                res.status(200).json({message: 'Item created successfully'});
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllVariants,
    getVariantById,
    getVariantsByCategory,
    getVariantByName,
    updateVariant,
    deleteVariant,
    createVariant
};