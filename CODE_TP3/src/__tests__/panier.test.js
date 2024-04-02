const { utilisateursAyantAcheteProduit, prixTotalPanierUtilisateur } = require("../paniers");

describe("paniers.js", () => {
  describe("utilisateursAyantAcheteProduit", () => {
    const paniersData = [
      { id: 97, products: [{ id: 39, title: "iphone165" }, { id: 50, title: "raclette" }] },
      { id: 13, products: [{ id: 39, title: "iphone165" }, { id: 60, title: "biere" }] },
      { id: 22, products: [{ id: 50, title: "raclette" }, { id: 70, title: "poulet" }] },
    ];

    it("Doit retourner la liste des utilisateurs ayant acheté le produit", () => {
      const productId = 39;
      const attendu = [97, 13]; 

      const result = utilisateursAyantAcheteProduit(productId, paniersData);
      expect(result).toEqual(attendu);
    });

    it("Doit retourner un message si aucun utilisateur n'a acheté le produit", () => {
      const productId = 1000; 
      const attendu = "Ce produit n'est présent dans aucun panier";

      const result = utilisateursAyantAcheteProduit(productId, paniersData);
      expect(result).toEqual(attendu);
    });
  });

  
  describe("prixTotalPanierUtilisateur", () => {
    const paniers = [
        { userId: 1, products: [{ total: 100, totalDiscounted: 90 }, { total: 200, totalDiscounted: 180 }] },
        { userId: 2, products: [{ total: 150, totalDiscounted: 130 }] },
    ];

    const utilisateurs = [
        { id: 1, email: "utilisateur1@gmail.com" },
        { id: 2, email: "utilisateur2@gmail.com" },
        { id: 3, email: "utilisateur3@example.com" }, 
    ];

    it("Doit retourner le prix total et le prix total discount du panier de l'utilisateur", () => {
        const userId = 1;
        const expected = { prixTotal: 300, prixTotalDiscounted: 270 };
        const result = prixTotalPanierUtilisateur(userId, paniers, utilisateurs);
        expect(result).toEqual(expected);
    });

    it("Doit retourner l'adresse e-mail si l'utilisateur n'a pas de panier", () => {
        const userId = 3;
        const expected = { mail: "utilisateur3@example.com" };
        const result = prixTotalPanierUtilisateur(userId, paniers, utilisateurs);
        expect(result).toEqual(expected);
    });

    it("Doit retourner l'adresse e-mail si le prix total dépasse 1000€", () => {
        const userId = 2;
        const expected = { prixTotal: 150, prixTotalDiscounted: 130, mail: "utilisateur2@gmail.com" };
        const result = prixTotalPanierUtilisateur(userId, paniers, utilisateurs);
        expect(result).toEqual(expected);
    });
});

});
