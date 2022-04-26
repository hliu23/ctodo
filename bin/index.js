#! /usr/bin/env node

require("yargs")
  .scriptName("ctodo")
  .usage("\nUsage: Create a to-do list and save associated information (ex. links and files)\n$0 <command> <args>")

  .commandDir("cmds")
  .demandCommand()
  .help()
  .argv