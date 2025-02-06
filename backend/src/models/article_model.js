class article_model {
    constructor() {
    }

    static areArticles(articles) {
        let validArticles = [];
        articles.forEach(article => {
            if ( (typeof article.name === 'string') && (typeof article.description === 'string') && (typeof parseFloat(article.price) === 'number') && (typeof article.category_id === 'number') && (typeof article.sport_id === 'number') ) {
                // article.image_url = './src/assets/images'+article.image_url;
                validArticles.push(article);
            }
        });
        return validArticles;
    }

    static isArticle(article) {
        console.log(typeof article[0].price);
        if ( (typeof article.name === 'string') && (typeof article.description === 'string') && (typeof article.price === 'number') && (typeof article.category_id === 'number') && (typeof article.sport_id === 'number') ) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = article_model;