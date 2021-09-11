const testFolder = './Tools/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    fs.appendFile('data.txt', '- assets/images/thumb_styles/Tools/' + file + '\n', function (err) {
      if (err) return console.log(err);
    });
  });
});