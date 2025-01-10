// Description: Controller for handling requests to the API

// Import the Item model
// const Item = require('../models/item');
//items 

function testDBConnection(req, res){
    res.send('Test DB connection');
}

module.exports = {
    testDBConnection
};

