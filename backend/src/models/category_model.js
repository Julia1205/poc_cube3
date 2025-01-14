class category_model {
    constructor() {
    }


    static areCategories(items) {
        console.log('ici');
        if(this.isValidCategory(items)){
            return items;
        }else{
            console.log('false');
        }
    }

    static async isValidCategory(item) 
    {
        console.log('ici2');
        let id;
        let name;
        //if there is no id make it null, if there is check if it is a number
        item.cat_category_id != null ? id = item.cat_category_id : id = null;
        name = item.cat_category_name;
        if(id != null)
        {
            console.log('is not null');
            if ((typeof name == 'string') && (typeof id == 'number')) 
            {
                return true;
            }else{
                return false;
            }
        } else if(id == null)
        {
            console.log('is null');
            if ((typeof name == 'string')) 
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


module.exports = category_model;