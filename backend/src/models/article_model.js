class article_model {
    constructor() {
    }

    static areArticles(articles) {
        let validArticles = [];
        articles.forEach(article => {
            if (article.name && article.description && article.price && article.category_id && article.sport_id) {
                validArticles.push(article);
            }
        });
        return validArticles;
    }

    static isArticle(article) {
        if (article.name && article.description && article.price && article.category_id && article.sport_id) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = article_model;