const productsData = require("./products.json");


/**
 * Retourne les informations sur les catégories de produits avec leur disponibilité.
 * @param {Array} products - Liste des produits avec leur titre, stock et catégorie.
 * @returns {Object} - Informations sur les catégories de produits avec leur disponibilité.
 */
function informationsCategoriesProduits(products) {
  const categories = {};
  
  
  products.forEach(product => {
    const { category, stock } = product;
    
    
    let disponibilite;
    if (stock < 10) {
      disponibilite = "low";
    } else if (stock >= 10 && stock <= 50) {
      disponibilite = "medium";
    } else {
      disponibilite = "high";
    }
    
    
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push({ libelle: product.title, dispo: disponibilite });
  });
  
  return categories;
}

module.exports = {
    informationsCategoriesProduits,
    };