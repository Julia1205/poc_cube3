const axios = require ('axios');
const api = require('../config/api');
const article_model = require('../models/article_model');

async function getAllArticles(req, res) {
  try {
    await axios.get(api+'/articles').then((response) => {
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

async function getArticleByID(req, res){
  try{
    const articleId = parseInt(req.params.id);
    await axios.get(api+'/articleId/'+articleId).then((response) => {
      let result = response.data;
      const article = Object.values(result);
      const validArticle = article_model.areArticles(article);
      console.log(validArticle);
      res.status(200).json(validArticle[0]);
    });
  } catch (err){
    res.status(500).send('Erreur lors de la récupération de l\'article');
    console.log(err);
  }
}

async function getArticleByName(req, res){
  try{
    const articleName = String(req.params.name);
    await axios.get(api+'/articleName/'+articleName).then((response) => {
      let result = response.data;
      const article = Object.values(result);
      const validArticle = article_model.areArticles(article);
      console.log(validArticle);
      res.status(200).json(validArticle);
    });
  } catch (err){
    res.status(500).send('Erreur lors de la récupération de l\'article');
    console.log(err);
  }
}

async function getArticleByCategory(req, res){
  try{
    const category = parseInt(req.params.id);
    await axios.get(api+'/articleCategory/'+category).then((response) => {
      let result = response.data;
      const article = Object.values(result);
      const validArticle = article_model.areArticles(article);
      console.log(validArticle);
      res.status(200).json(validArticle);
    });
  } catch (err){
    res.status(500).send('Erreur lors de la récupération de l\'article');
    console.log(err);
  }
}

async function getArticleBySport (req, res){
  try{
    const sport = parseInt(req.params.id);
    await axios.get(api+'/articleSport/'+sport).then((response) => {
      let result = response.data;
      const article = Object.values(result);
      const validArticle = article_model.areArticles(article);
      console.log(validArticle);
      res.status(200).json(validArticle);
    });
  } catch (err){
    res.status(500).send('Erreur lors de la récupération de l\'article');
    console.log(err);
  }
}

module.exports = {
  getAllArticles,
  getArticleByID,
  getArticleByName,
  getArticleByCategory,
  getArticleBySport
};