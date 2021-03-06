const utils = require("../functions/utils.js");
const modify = require("../functions/modify.js");

exports.command = "modify <num>";
exports.aliases = ["mod", "m"];
// num only within certain range

exports.describe = "Modify entered tasks";

exports.builder = {
  verbose: {
    alias: "v",
    type: "boolean",
    desc: "Run in verbose mode",
  }
}

exports.handler = function (argv) {
  const file = utils.getPath("files.tasksFile");
  console.log(argv);
  console.log("Not yet implemented");
  // list.listTasks(file, (argv.v || argv.verbose));
}

