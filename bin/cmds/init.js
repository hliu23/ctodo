const utils = require("../functions/utils.js");

const init = require("../functions/init.js");

exports.command = "init <task|task..>";

exports.describe = "Create new task";

exports.handler = function (argv) {
  const file = utils.getPath("files.tasksFile");
  const task = init.parseTasks(argv.task);
  init.appendTask(file, task);
}
