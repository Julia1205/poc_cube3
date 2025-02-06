class variant_model {
    constructor() {
    }

    static areVariants(variants) {
        let validVariants = [];
        variants.forEach(variant => {
            if ( (typeof variant.article_id === 'number') && (typeof variant.variant_name === 'string') && (typeof variant.image_url === 'string') ) {
                validVariants.push(variant);
            }
        });
        return validVariants;
    }

}


module.exports = variant_model;