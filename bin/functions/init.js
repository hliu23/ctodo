const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid");
const utils = require("./utils.js");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);


function parseTasks(args) {
  var parsedText = "";
  if (args == undefined || args.length < 1) throw new Error("Additional arguments expected");
  else if ((typeof args) == "string") return args;
  else {
    args.forEach((arg, index) => {
      parsedText += arg;
      if (index !== args.length - 1) parsedText += " ";
    });
  }
  return parsedText;
}

function appendTask(path, task) {
  utils.editJSON(path, task, function (content, task) {
    if (content.tasks === undefined) content.tasks = [];
    const index = content.tasks.length;
    const date = new Date();
    const uuid = uuidv4();
    content.tasks[index] = {
      name: task,
      modified: date,
      id: uuid
    }
    return content;
  });
  // readFile(path)
  //   .then((content) => {
  //     if (content != "") content = JSON.parse(content);
  //     else content = {};
  //     const result = JSON.stringify(insert(content, task));
  //     return writeFile(path, result);
  //   })
  //   .catch((err) => {
  //     utils.catchError(err);
  //   })
}

// as arrow function inside?
// local
function insert(content, task) {

}


module.exports = {
  parseTasks: parseTasks,
  appendTask: appendTask,
};