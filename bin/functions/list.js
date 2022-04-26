const fs = require("fs");
const util = require("util");
const Table = require("easy-table");
const utils = require("./utils.js");

const readFile = util.promisify(fs.readFile);

function listTasks(path, verbose) {
  readFile(path)
    .then((content) => {
      if (content == "") console.info("No tasks entered yet\n  (use \"ctodo init <task|task..>\" to create a task)");
      else {
        const tasks = JSON.parse(content).tasks;
        if (verbose) {
          var table = new Table;
          tasks.forEach((task, index) => {
            table.cell("N.", index + 1);
            table.cell("Task", task.name);
            table.cell("Last Modified", task.modified);
            table.newRow();
          })
          console.info(table.toString());
        } else {
          for (var i = 0; i < tasks.length; i++) {
            console.info((i+1) + " | " + tasks[i].name);
          }
        }
      }
    })
    .catch((err) => {
      utils.catchError(err);
    })
}

module.exports = {
  listTasks: listTasks
}
