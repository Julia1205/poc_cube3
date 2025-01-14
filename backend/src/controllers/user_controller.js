const axios = require ('axios');
const api = require('../config/api');
// const user_model = require('../models/user_model');

function addUser(req, res) {
    const user = req.body;
    console.log(user);
    axios.post(api+'/addUser', user).then((response) => {
        console.log(response.data);
        res.json(response.data);
    }).catch((err) => {
        console.log(err);
        res.status(500).send('Erreur lors de la création de l\'utilisateur');
    });
}

module.exports = {
    addUser
};