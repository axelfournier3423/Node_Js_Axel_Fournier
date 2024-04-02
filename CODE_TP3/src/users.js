const usersData = require("./users.json");

function age(users) {
  return users.filter((user) => user.age >= 50);
}



/**
 * Retourne la liste des numéros de téléphone des utilisateurs de plus de 50 ans.
 * @param {Array} users - Liste des utilisateurs avec leur âge et numéro de téléphone.
 * @returns {Array} - Liste des numéros de téléphone des utilisateurs de plus de 50 ans.
 */
function numeroTelPersonne50(users) {
  const usersOver50 = age(users);
  return usersOver50.map((user) => user.phone); 
}



module.exports = {
  numeroTelPersonne50,
  age,
};
