const testFolder = './Test/';
const fs = require('fs');
const sharp = require('sharp');


fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    sharp(testFolder + file).resize({ width: 100 }).toFile(testFolder + '/thumbnals/' + file);
    fs.appendFile('data.txt', "\"" + file + '\",\n', function (err) {
      if (err) return console.log(err);
    });
  });
});