const fs = require("fs");
const util = require("util");
const config = require("config");
const path = require("path");
// const utils = require("./utils.js");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

function getPath(configStr) {
  // test path?
  try {
    const file = config.get(configStr);
    const res = path.join(__dirname, file);
    if (fs.existsSync(res)) return res;
    else throw Error("Path does not exist");
  } catch (err) {
    catchError(err);
  }
}

function catchError(err) {
  // input error object
  // log in the future
  console.error(err.message);
}

// path
// middle function: take object and optional parameter and return object
function editJSON(path, middleFunc) {
  readFile(path)
    .then((content) => {
      if (content != "") content = JSON.parse(content);
      else content = {};
      const result = JSON.stringify(middleFunc(content));
      return writeFile(path, result);
    })
    .catch((err) => {
      catchError(err);
    })
}

module.exports = {
  getPath: getPath,
  catchError: catchError,
  editJSON: editJSON
};