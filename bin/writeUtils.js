const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);


function parseTasks(args) {
  var parsedText = "";
  if (args == undefined || args.length < 1) throw new Error("Additional arguments expected");
  else {
    args.forEach((arg, index) => { 
      parsedText += arg;
      if (index !== args.length-1) parsedText += " ";
    });
  }
  if (parsedText[parsedText.length-1] !== "\n") parsedText += "\n";
  return parsedText;
}

function writeTasks(file, content) {
  writeFile(file, content, { flag: "a" })
    .then(() => {
      // console.log("Successfully write content to " + file);
    })
    .catch((err) => {
      console.error(err)
    });
}

module.exports = {
  parseTasks: parseTasks,
  writeTasks: writeTasks
};