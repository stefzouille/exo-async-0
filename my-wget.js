// Ecrivez un programme my-wget.js qui prend comme paramètre sur la ligne de commande une url, qui telecharge son contenu,
// et l'écrit dans un fichier index.html sur votre disque.
// Il faudra utiliser le package axios et des fonctions du module fs/promises pour cela.

const axios = require("axios");
const fsPromises = require("fs/promises");
const chalk = require("chalk");

if ( process.argv.length ! == 3) {
  console.log('usage : enter a url in commande')
  process.exit(1)
}

const main = async () => {
  try {
    const response = await axios.get(process.argv[2]);
    await fsPromises.writeFile("index.html", response.data);
    const txt = await fsPromises.stat("./index.html", "utf-8");
    console.log(response.headers);
    console.log(chalk.red(`the big size of file is: ${txt.size}`));
  } catch (e) {
    console.log(e.message);
  }
};
main();
