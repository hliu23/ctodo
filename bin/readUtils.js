const config = require("config");
const path = require("path");

function getPath(configStr) {
  // test path?
  const file = config.get(configStr);
  return path.join(__dirname, file);
}


module.exports = {
  getPath: getPath
}