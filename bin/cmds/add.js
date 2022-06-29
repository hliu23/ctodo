const utils = require("../functions/utils.js");
const add = require("../functions/add.js");

exports.command = "add";
exports.aliases = ["a"];
// num only within certain range

exports.describe = "Add links to tasks (press ctrl + c to terminate input)";

exports.builder = {
  verbose: {
    alias: "v",
    type: "boolean",
    desc: "Run in verbose mode",
  },
  single: {
    alias: "s",
    type: "boolean",
    desc: "Add a single link (press enter to terminate input)"
  }
}

exports.handler = function (argv) {
  const file = utils.getPath("files.tasksFile");
  console.log(argv);
  console.log("Not yet implemented");
  // list.listTasks(file, (argv.v || argv.verbose));
}

