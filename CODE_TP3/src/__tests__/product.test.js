const { informationsCategoriesProduits } = require("../product");

describe("product.js", () => {
    describe("informationsCategoriesProduits", () => {
        it("Doit retourner les informations sur les catégories de produits avec leur disponibilité", () => {
        
            const productsData = [
                { title: "iPhone 9", stock: 94, category: "smartphones" },
                { title: "iPhone X", stock: 34, category: "smartphones" },
                { title: "MacBook Pro9", stock: 102, category: "laptops" }
            ];

            const attendu = {
                smartphones: [
                    { libelle: "iPhone 9", dispo: "high" },
                    { libelle: "iPhone X", dispo: "medium" }
                ],
                laptops: [
                    { libelle: "MacBook Pro9", dispo: "high" }
                ]
            };

            const result = informationsCategoriesProduits(productsData);
            expect(result).toEqual(attendu);
        });

        it("Doit retourner un objet vide si aucun produit n'est fourni", () => {
            const result = informationsCategoriesProduits([]);
            expect(result).toEqual({});
        });
    });
});
