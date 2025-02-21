const fs = require('fs');
const path = require('path');

// console.log(fs.rm(path.resolve(__dirname, "translations"), {
//     recursive: true,
//     force: true
// }, (err) => {
//     console.log(err);
// }));

let translations = {
    a: 1,
    b: 2 
};

let pathToTranslationsFolder = path.resolve(__dirname, "translations");

try {
    if (!fs.existsSync(pathToTranslationsFolder)) {
      fs.mkdirSync(pathToTranslationsFolder);
    }
    // create a translation.json file and write contents to file.
    let content = JSON.stringify(translations);
    fs.writeFileSync(path.resolve(__dirname, "translations", "translation-en.json"), content, )
  } catch (err) {
    console.error(err);
  }