// import ArticleUtils from './article_model'; 
const ArticleUtils = require('./article_model');

describe("Tests pour areArticles et isArticle", () => {
    
    const validArticles = [
        { name: "Ballon", description: "Un ballon de foot", price: "19.99", category_id: 1, sport_id: 2 },
        { name: "Chaussures", description: "Chaussures de running", price: "49.99", category_id: 3, sport_id: 4 }
    ];

    const invalidArticles = [
        { name: "Ballon", description: "Un ballon de foot", price: "abc", category_id: 1, sport_id: 'Test' }, // Prix invalide
        { name: "Chaussures", description: 100, price: "49.99", category_id: "test", sport_id: 'quatttro' }, // Mauvais type
    ];

    test("areArticles filtre correctement les articles valides", () => {
        const result = ArticleUtils.areArticles(validArticles);
        expect(result.length).toBe(2); // On doit garder les 2 articles valides
        expect(result).toEqual([
            { name: "Ballon", description: "Un ballon de foot", price: "19.99", category_id: 1, sport_id: 2 },
            { name: "Chaussures", description: "Chaussures de running", price: "49.99", category_id: 3, sport_id: 4 }
        ]);
    });

    test("areArticles supprime les articles invalides", () => {
        const result = ArticleUtils.areArticles(invalidArticles);
        expect(result.length).toBe(0); // Aucune entrÃ©e valide
    });

    test("isArticle retourne true pour un article valide", () => {
        const validArticle = { name: "Ballon", description: "Un ballon de foot", price: 19.99, category_id: 1, sport_id: 2 };
        expect(ArticleUtils.isArticle(validArticle)).toBe(true);
    });

    test("isArticle retourne false pour un article invalide", () => {
        const invalidArticle = { name: "Ballon", description: "Un ballon de foot", price: "abc", category_id: 1, sport_id: 2 }; // Prix incorrect
        expect(ArticleUtils.isArticle(invalidArticle)).toBe(false);
    });
});