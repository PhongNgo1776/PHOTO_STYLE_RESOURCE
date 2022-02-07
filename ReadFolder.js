const testFolder = './Mantis/IMG';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    fs.appendFile('data.txt', "\"" + file + '\",\n', function (err) {
      if (err) return console.log(err);
    });
  });
});