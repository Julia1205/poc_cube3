const db = require('../config/db'); //Import database connection

function getAllItems(req, res) {
    try {
        db.query('SELECT * FROM a_articles', (err, result) => {
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

function getItemById(req, res) {
    const itemId = req.params.id;
    try {
        db.query('SELECT * FROM a_articles WHERE a_article_id = ?', [itemId], (err, result) => {
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

function getItemsByCategory(req, res) {
    const categoryId = req.params.category;
    console.log('getItemsByCategory : '+categoryId);
    try {
        query = "SELECT * FROM a_articles WHERE a_articles_category = ?";
        db.query(query, [categoryId], (err, result) => {
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

function getItemsByName(req, res) {
    const itemName = req.params.name;
    try {
        db.query("SELECT * FROM a_articles WHERE a_articles_name LIKE %?%", [itemName], (err, result) => {
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

function updateItem(req, res){
    console.log(req.body);
    const itemId = req.params.id;
    const itemName = req.params.newName;
    const itemPrice = req.params.newPrice;
    const itemCategory = req.params.newCategory;
    try {
        query = "UPDATE a_articles SET a_articles_name=?, a_articles_price=?, a_articles_category=? WHERE a_articles_id = ?"
        db.query(query, [itemName, itemPrice, itemCategory, itemId], (err, result) => {
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

function deleteItem(req, res){
    const itemId = req.params.id;
    try {
        db.query('DELETE FROM a_articles WHERE a_articles_id = ?', [itemId], (err, result) => {
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

function createItem(req, res){
    const item = req.params.name;
    const price = req.params.price;
    const category = req.params.category;
    try {
        db.query('INSERT INTO a_articles (a_articles_name, a_articles_price, a_articles_category) VALUES(?, ?, ?)', 
            [item, price, category],
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

async function getRandomItems(howMany, req, res) {
    const number = parseInt(howMany);
    try {
        query = "SELECT * FROM a_articles ORDER BY RAND() LIMIT ?";
        db.query(query, [number], (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                console.log('Items retrieved:', result);
                return result;
                res.status(200).json(result);
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllItems,
    getItemById,
    getItemsByCategory,
    getItemsByName,
    updateItem,
    createItem,
    deleteItem,
    getRandomItems
};