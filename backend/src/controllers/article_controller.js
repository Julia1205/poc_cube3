const axios = require ('axios');
const api = require('../config/api');
const article_model = require('../models/article_model');

async function getAllArticles(req, res) {
  try {
    const response = await axios.get(api+'/items').then((response) => {
      result = response.data;
      const articles = Object.values(result);
      const validArticles = article_model.areArticles(articles);
      console.log(validArticles);
      res.json(validArticles);
    });
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération des items');
    console.log(err);
  }
}

async function getArticlesByCategory (req, res) {
  console.log(req.params);
  category = req.params.categoryId;
  try {
    const response = await axios.get(api+'/items/category/'+category).then((response) => {
      result = response.data;
      const articles = Object.values(result);
      const validArticles = article_model.areArticles(articles);
      console.log(validArticles);
      res.json(validArticles);
    });
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération des items');
    console.log(err);
  }
}



module.exports = {
  getAllArticles,
  getArticlesByCategory
};