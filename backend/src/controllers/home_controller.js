const axios = require ('axios');
const api = require('../config/api');
const article_model = require('../models/article_model');

async function getHomePage (req, res) {
    const howMany = parseInt(req.params.howMany);
    try {
        await axios.get(api+'/home/'+howMany).then((response) => {
        let result = response.data;
        const articles = Object.values(result);
        const validArticles = article_model.areArticles(articles);
        console.log(validArticles);
        res.json(validArticles);
        });
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération des articles');
        console.log(err);
    }
}

module.exports = {
    getHomePage
};