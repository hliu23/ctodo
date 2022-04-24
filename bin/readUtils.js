const fs = require("fs");
const config = require("config");
const path = require("path");
const util = require("util");
const utils = require("./utils.js");

const readFile = util.promisify(fs.readFile);

// prompts
const noTasks = "No tasks entered yet\n  (use \"ctodo -i <task_name>\" to create a task)"

function getPath(configStr) {
  // test path?
  const file = config.get(configStr);
  return path.join(__dirname, file);
}

function listTasks(path, format=false) { 
  readFile(path)
  .then((content) => {
    if (content == "") console.info(noTasks);
    else {
      const tasks = JSON.parse(content).tasks;
      for (var i = 0; i < tasks.length; i++) {
        console.info(i+1 + " | " + tasks[i].name);
      }

    }
    


  })
  .catch((err) => {
    utils.catchError(err);
  }) 
}

module.exports = {
  getPath: getPath,
  listTasks: listTasks
}


