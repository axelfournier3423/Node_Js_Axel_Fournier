/**
 * @function
 * @param {number} id, id de l'utilisateur a rechercher
 * @param {Array} usersData, tableau contenant la liste des utilisateurs 
 * Retourne les données de l'utilisateur de la liste qui correpondant à l'id 
 */
function getUser(id, usersData) {
  if (typeof id !== "number" || id < 0) {
    throw new Error("L'identifiant doit être un entier positif");
  }
  if (!Array.isArray(usersData)) {
    throw new Error(
      "La liste des utilisateur doit être un tableau contenant des utilisateurs"
    );
  }
  if (usersData.length === 0) {
    throw new Error("La liste des utilisateur est vide");
  }
  const user = usersData.find((user) => user.id === id);
  if (!user) {
    throw new Error(`L'utilisateur ${id} n'existe pas!`);
  }
  return user;
}

module.exports = {
  getUser,
};
