// Ecrivez un programme my-wget.js qui prend comme paramètre sur la ligne de commande une url, qui telecharge son contenu,
// et l'écrit dans un fichier index.html sur votre disque.
// Il faudra utiliser le package axios et des fonctions du module fs/promises pour cela.

const axios = require("axios");
const fsPromises = require("fs/promises");
const chalk = require("chalk");

const main = async () => {
  try {
    const response = await axios.get("https://fr.wikipedia.org/wiki/Zizi");
    await fsPromises.writeFile("index.html", response.data);
    const txt = await fsPromises.stat("./index.html", "utf-8");
    console.log(chalk.red(`the big size of file is: ${txt.size}`));
    console.log(response.headers);
  } catch (e) {
    console.log(e.message);
  }
};
main();
