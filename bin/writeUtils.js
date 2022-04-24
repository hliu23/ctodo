const fs = require("fs");
const util = require("util");

const md5 = require("crypto-js/md5");

const utils = require("./utils.js");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);



function parseTasks(args) {
  var parsedText = "";
  if (args == undefined || args.length < 1) throw new Error("Additional arguments expected");
  else {
    args.forEach((arg, index) => {
      parsedText += arg;
      if (index !== args.length - 1) parsedText += " ";
    });
  }
  // if (parsedText[parsedText.length - 1] !== "\n") parsedText += "\n";
  return parsedText;
  // catch error?
}




function insert(content, task) {
  if (content.tasks === undefined) content.tasks = [];
  const index = content.tasks.length;
  // content.tasks.push({name: task});
  // metadata
  const date = new Date();
  var hash = md5('message').toString();
  console.log(hash);
  content.tasks[index] = {
    name: task,
    modified: new Date()
  }
  return content;
}


function appendTask(path, task) {
  readFile(path)
    .then((content) => {
      if (content != "") content = JSON.parse(content);
      else content = {};
      const result = JSON.stringify(insert(content, task));
      return writeFile(path, result);
    })
    .then(() => {
      // console.log("done");
    })
    .catch((err) => {
      utils.catchError(err);
    })
}


module.exports = {
  parseTasks: parseTasks,
  appendTask: appendTask,
};