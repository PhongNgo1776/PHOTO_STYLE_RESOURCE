const rootFolder = './IMG/OutsideGarden/';
const destFolder = 'thumbnail/OutsideGarden/';
const fs = require('fs');
const sharp = require('sharp');


fs.readdir(rootFolder, (err, files) => {
  files.forEach(filename => {
    if(filename.includes(' (1)') || filename.includes(' (2)') || filename.includes(' (3)')){
      fs.unlinkSync(rootFolder + filename);
    }else{
      sharp(rootFolder + filename).resize({ width: 100 }).toFile(destFolder + filename);
      fs.appendFile('data.txt', "\"" + filename + '\",\n', function (err) {
        if (err) return console.log(err);
      });
    }
  });
});