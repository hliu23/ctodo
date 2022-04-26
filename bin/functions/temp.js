const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);


// local
function insert(content) {
  if (content.tasks === undefined) throw Error("No tasks stored");
  else {
    for (let i = 0; i < content.tasks.length; i++) {
      // add uuid
      const uuid = uuidv4();
      if (content.tasks[i].id === undefined) content.tasks[i].id = uuid;      
    }
  }
  return content;
}

const path = "./user_data/tasks.json";
readFile(path)
.then((content) => {
  content = JSON.parse(content);
  // console.log(content);
  const result = JSON.stringify(insert(content));
  return writeFile(path, result);
}).catch((err) => {
  console.error(err);
})