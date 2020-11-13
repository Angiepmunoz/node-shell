const fs = require("fs");

module.exports = function(path){
    fs.readFile(path, (err, data) => {
        if (err) throw err;
        process.stdout.write(data)
      })
}