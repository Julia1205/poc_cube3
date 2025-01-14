class article_model {
    constructor() {
    }


    static areArticles(items) {
        console.log('ici');
        if(this.isValidArticle(items)){
            return items;
        }else{
            console.log('false');
        }
    }

    static async isValidArticle(item) {
        let id;
        let name
        let price;
        let category;
        //if there is no id make it null, if there is check if it is a number
        item.a_articles_id != null ? id = item.a_articles_id : id = null;
        name = item.a_articles_name;
        price = item.a_articles_price;
        category = item.a_articles_category;
        if ((typeof name == 'string') && (typeof price == 'number') && (typeof category == 'number')) {
                return true;
            }else{
                return false;
            }
    }
}

module.exports = article_model;