const axios = require ('axios');
const api = require('../config/api');
const category_model = require('../models/category_model');

async function getAllCategories(req, res) {
  try {
    const response = await axios.get(api+'/categories').then((response) => {
      result = response.data;
      const categories = Object.values(result);
      const validCategories = category_model.areCategories(categories);
      console.log(validCategories);
      res.json(validCategories);
    });
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération des categories');
    console.log(err);
  }
}

async function isExistingCategory(req, res) {
    // categoryNameToFind = req.body.name;
    let categoryNameToFind = req.params.name;
    let categoryIdToFind = req.params.id;
    console.log(categoryIdToFind);
    try{
        const response = await axios.get(api+'/categories').then((response) => {
            result = response.data;
            console.log(result);
            for (let key in result) {
                console.log(result[key].cat_category_id);
                if (result[key].cat_category_id === categoryIdToFind && result[key].cat_category_name === categoryNameToFind) {
                  console.log(`Found the value ${categoryNameToFind} with key ${categoryIdToFind}`);
                }
            res.json(validCategory);
            }
        });
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération de la catégorie');
        console.log('non');
    }
}


module.exports = {
    getAllCategories,
    isExistingCategory
};