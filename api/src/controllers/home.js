const { getRandomItems } = require('../controllers/items');
const { getRandomVariant } = require('../controllers/variants');

function getHomePage(req, res) {
  try {
    const howMany = req.params.howMany;
    item = await getRandomItems(howMany, req, res);
    console.log('iciiiii' + item);
    // console.log(' gethomepage item' + getRandomItems(howMany, req, res));
//     getRandomVariant(req, res);
//     res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
    getHomePage,
};