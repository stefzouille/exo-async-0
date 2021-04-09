// Convertir le code suivant qui utilise les versions synchrones
//  de l'api du module fs, en un code qui utilise les versions asynchrones de l'api du module fs/promises.
const axios = require("axios");
const fsPromises = require("fs/promises");

const main = async () => {
  try {
    let txt1 = await fsPromises.readFile("hello.txt", "utf-8");
    txt1 = txt1.toUpperCase();
    const txt2 = await fsPromises.writeFile("hello.txt", "txt1");
  } catch (e) {
    console.log(e.message);
  }
};
main();

// const fs = require("fs");
// try {
//   let txt1 = fs.readFileSync("hello.txt", "utf-8");
//   txt1 = txt1.toUpperCase();
//   fs.writeFileSync("hello.txt", txt1);
// } catch (e) {
//   console.log(e.message);
// }
