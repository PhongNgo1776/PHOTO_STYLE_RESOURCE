const rootFolder = './Wallpapers/IMG/';
const destFolder = './Wallpapers/thumbnail/';
const fs = require('fs');
const sharp = require('sharp');


fs.readdir(rootFolder, (err, files) => {
  files.forEach(filename => {
    if (filename.includes('.DS_Store') || filename.includes(' (1)') || filename.includes(' (2)') || filename.includes(' (3)')){
      fs.unlinkSync(rootFolder + filename);
    }else{
      sharp(rootFolder + filename).resize({ width: 100 }).toFile(destFolder + filename);
      fs.appendFile('data.txt', "\"" + filename + '\",\n', function (err) {
        if (err) return console.log(err);
      });
    }
    console.log(filename);
  });
});