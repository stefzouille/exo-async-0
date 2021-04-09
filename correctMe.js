// Ce programme asynchrone ne fonctionne pas.
// Ajouter le code nécessaire pour faire fonctionner ce programme.

const fsPromises = require("fs/promises");

const main = async () => {
  try {
    let txt1 = await fsPromises.readFile("hello.txt", "utf-8");
    console.log(txt1);
  } catch (e) {
    console.log(e.message);
  }
};
main();
