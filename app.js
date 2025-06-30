// console.log("hello from node");
// console.log(__dirname);
// console.log(__filename)

// const os = require("os"); // to ask OS  Using os module
// console.log("platform:", os.platform());
// console.log("Arch:", os.arch());

// const talk=require("./greet")
// console.log(talk("Besu"))

// const file = require("fs");
// file.writeFileSync("student.txt", "student will register here! ");

// console.log(file.readFileSync("student.txt",'utf-8'));

// const path = require("path");
// console.log(path.basename(__filename));

// const path = require("path");
// console.log(path.dirname(__filename));

const path = require("path");
console.log(path.extname(__filename));

