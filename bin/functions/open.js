const fs = require("fs");
const util = require("util");
const open = require("open");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

