const axios = require ('axios');
const api = require('../config/api');
const variant_model = require('../models/variant_model');

async function getVariantByArticle(req, res) {
    const articleId = req.params.articleId;
    try {
        const response = await axios.get(api+'/variants/item/'+articleId).then((response) => {
            result = response.data;
            const variants = Object.values(result);
            const validVariants = variant_model.areVariants(variants);
            console.log(validVariants);
            res.json(validVariants);
        });
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération des variants');
        console.log(err);
    }
}

module.exports = {
    getAllCategories,
    isExistingCategory
};