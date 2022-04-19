const fs = require("fs");
const open = require("open");

// open("www.google.com");
// open("www.bing.com");
// console.log(__filename);


async function openFile() {
  await open('../package.json');
}

openFile()
.then( () => {
  console.log("success");
}).catch((e) => {
  console.log(e)
})
// open

try {
  const folderName = "user_data";
  if (!fs.existsSync(folderName)) fs.mkdirSync(folderName);


} catch (err) {
  console.error(err);
}

// testCsv("1, 2\n1, 2")

function testCsv(text) {
  try {
    fs.writeFileSync("demo.csv", text, {flag: "a"});
  } catch (err) {
    console.error(err);
  }
}


function openLinks() {

}

module.exports = {
  test: testCsv,
  parseTask: parseTask
};

// arrayList
// insert
// pop
// alphabet
// significance
// MUST DO NOW
// MUST DO IN THE FUTURE
// DO IF HAVE TIME
// due date?