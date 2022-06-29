const utils = require("../functions/utils.js");

const init = require("../functions/init.js");

exports.command = "init <task|task..>";
exports.aliases = ["i"];

exports.describe = "Create new task";

exports.builder = {
  verbose: {
    alias: "v",
    type: "boolean",
    desc: "Run in verbose mode",
    // default: true
  }
}

exports.handler = function (argv) {
  const file = utils.getPath("files.tasksFile");
  const task = init.parseTasks(argv.task);
  init.appendTask(file, task, (argv.v || argv.verbose));
}
