const paniersData = require("./paniers.json");
const utilisateursData = require("./users.json");
const produitsData = require("./products.json");

/**
 * Retourne la liste des IDs des utilisateurs ayant acheté un produit spécifique.
 * @param {number} productId - L'ID du produit à rechercher dans les historiques d'achat des utilisateurs.
 * @returns {Array|string} - Liste des IDs des utilisateurs ayant acheté le produit ou un message indiquant qu'aucun utilisateur n'a acheté le produit.
 */
function utilisateursAyantAcheteProduit(productId) {
  const utilisateurs = [];

  paniersData.forEach((panier) => {
    panier.products.forEach((product) => {
      if (product.id === productId) {
        utilisateurs.push(panier.userId);
      }
    });
  });

  if (utilisateurs.length === 0) {
    return "Ce produit n'est présent dans aucun panier";
  } else {
    return utilisateurs;
  }
}


/**
 * Retourne le prix total du panier d'un utilisateur.
 * Si l'utilisateur n'a pas de panier, retourne son adresse mail.
 * Si le prix total dépasse 1000€, retourne également son adresse mail.
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Object} - Un objet contenant le prix total du panier,
 * et éventuellement l'adresse mail de l'utilisateur.
 */
function prixTotalPanierUtilisateur(userId) {
    let prixTotal = 0;
    
    let mail = "";
    
    const paniersdata = paniersData.filter((panier) => panier.userId === userId);
    paniersdata.forEach((panier) => {
        panier.products.forEach((product) => {
            prixTotal += product.total;
        })
        });
        

        
    
    utilisateursData.forEach((utilisateur) => {
        if (utilisateur.id === userId) {
        mail = utilisateur.email;
        }
    });
    
    if (prixTotal === 0) {
        return { mail };
    } else if (prixTotal > 1000) {
        return { prixTotal, mail };
    } else {
        return { prixTotal };
    }
}

console.log(prixTotalPanierUtilisateur(79));

module.exports = {
  utilisateursAyantAcheteProduit,
  prixTotalPanierUtilisateur
};

