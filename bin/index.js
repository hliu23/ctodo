#! /usr/bin/env node

const yargs = require("yargs");
const rutils = require("./readUtils.js");
const wutils = require("./writeUtils.js");

const usage = "\nUsage: Create a to-do list and save associated information (ex. links and files)";
const options = yargs
.usage(usage)
.option("i", {
  alias: "init",
  describe: "Create new task",
  type: "boolean",
  demandOption: false
})
.option("l", {
  alias: "list",
  describe: "List all entered tasks.",
  type: "boolean",
  demandOption: false
})
.option("d", {
  alias: "delete",
  describe: "Delete task",
  type: "boolean",
  demandOption: false
})
.help(true)
.argv;

if (yargs.argv._[0] == null) {
  yargs.showHelp();
} else if (yargs.argv.i || yargs.argv.init) {
  const file = rutils.getPath("files.tasksFile");
  const task = wutils.parseTasks(yargs.argv._);
  wutils.writeTasks(file, task);
}



// const openFile = taskFile.replace(/\\/g, "/");

