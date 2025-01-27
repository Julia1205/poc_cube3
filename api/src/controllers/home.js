const { getRandomItems } = require('../controllers/items');
const { getRandomVariant } = require('../controllers/variants');

async function getHomePage(req, res) {
  console.log(req.params.howMany);
  let item;
  try {
    const howMany = req.params.howMany;
    item = await getRandomItems(howMany, req, res);
    console.log(item);
    article = Object.values(item)[0].a_articles_id;
    variants = await getRandomVariant(article, howMany, req, res);
    res.status(200).json(variants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
    getHomePage,
};