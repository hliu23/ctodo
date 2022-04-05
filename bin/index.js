#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils.js");

const usage = "\nUsage: Create a to-do list and save associated information (ex. links and files)";
const options = yargs
.usage(usage)
.option("a", {
  alias: "add",
  describe: "Add task(s)",
  type: "boolean",
  demandOption: false
})
.option("d", {
  alias: "delete",
  describe: "Delete task(s)",
  type: "boolean",
  demandOption: false
})
.option("l", {
  alias: "list",
  describe: "List all entered tasks.",
  type: "boolean",
  demandOption: false
})

.help(true)
.argv;

if (yargs.argv._[0] == null) {
  yargs.showHelp();
}

console.log(yargs.argv._)