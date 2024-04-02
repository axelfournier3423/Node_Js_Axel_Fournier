const { numeroTelPersonne50 } = require("../users");

const usersData = [
  {
    name: "John",
    age: 25,
    phone: "0625303517",
  },
  {
    name: "Jane",
    age: 55,
    phone: "0625303517",
  },
  {
    name: "Bob",
    age: 60,
    phone: "0625303517",
  },
];

describe("numeroTelPersonne50", () => {
  it("retourne les numéros de téléphone des utilisateurs de plus de 50 ans", () => {
    const result = numeroTelPersonne50(usersData);
    expect(result).toEqual(["0625303517", "0625303517"]);
  });
  it("retourne un tableau vide si aucun utilisateur n'a plus de 50 ans", () => {
    const result = numeroTelPersonne50([{ age: 25, phone: "0625303517" }]);
    expect(result).toEqual([]);
  });
  it("retourne un tableau vide si aucun utilisateur n'est fourni", () => {
    const result = numeroTelPersonne50([]);
    expect(result).toEqual([]);
  });

});

