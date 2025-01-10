const axios = require ('axios');
const api = require('../config/api');

async function getAllItems(req, res) {
  console.log(api);
  console.log('arrive ici');
  try {
    const response = await axios.get(api+'/items').then((response) => {
      console.log(response.data);
      res.json(response.data);
      }
    ); // Remplacez par l'URL spécifique de votre API
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération des items');
    console.log(err);
  }
}



module.exports = {
  getAllItems
};