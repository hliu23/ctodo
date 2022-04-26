const utils = require("../functions/utils.js");
const list = require("../functions/list.js");

exports.command = "list";

exports.describe = "List all entered tasks";

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
  list.listTasks(file, (argv.v || argv.verbose));
}

