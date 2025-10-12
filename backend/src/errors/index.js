const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(__dirname);
const modules = {};

for (const file of files) {
  if (file !== "index.js" && file.endsWith(".js")) {
    const modulePath = path.join(__dirname, file);
    const imported = require(modulePath);

    if (typeof imported === "function" && imported.name) {
      modules[imported.name] = imported;
    } else {
      const name = path.basename(file, ".js");
      modules[name] = imported;
    }
  }
}

module.exports = modules;
