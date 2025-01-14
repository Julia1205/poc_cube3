class variant_model {
    constructor() {
    }


    static areVariants(items) {
        console.log('ici');
        if(this.isValidVariant(items)){
            return items;
        }else{
            console.log('false');
        }
    }

    static async isValidVariant(item)
    {
        console.log('ici2');
        let id;
        let name;
        let desc;
        let article
        let image;
        let stock;
        //if there is no id make it null, if there is check if it is a number
        item.a_variants_id != null ? id = item.a_variants_id : id = null;
        name = item.a_variants_name;
        desc = item.a_variants_description;
        article = item.a_variants_article;
        image = item.a_variants_image;
        stock = item.a_variants_stock;
        if(id != null)
        {
            console.log('is not null');
            if (
                (typeof name == 'string') 
                && (typeof id == 'number')
                && (typeof desc == 'string')
                && (typeof article == 'string')
                && (typeof image == 'string')
                && (typeof stock == 'number')
            )
            {
                return true;
            }else{
                return false;
            }
        } else if(id == null)
        {
            console.log('is null');
            if (
                (typeof name == 'string') 
                && (typeof desc == 'string')
                && (typeof article == 'string')
                && (typeof image == 'string')
                && (typeof stock == 'number')
            )
            {
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}


module.exports = variant_model;