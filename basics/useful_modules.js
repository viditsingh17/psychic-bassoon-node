// var os = require('os');
// var currentOS = {
//     name : os.type(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);

//Path module
// var path = require('path');
// console.log(path.sep);
// console.log(path.join('/basics','test.txt'));    Normalizes the path for the platform

// This way we can get the absolute path
// var absolute = path.resolve(__dirname,'baiscs','app2.js');
// console.log(absolute);

//File system
//Synchronous approach
// const { readFileSync, writeFileSync } = require("fs");
// const filecontent = readFileSync("./content/sub-content/text.txt", "utf8");
// console.log(filecontent);
// writeFileSync(
//   "./content/sub-content/result.txt",
//   `This file was created by node : ${filecontent}`,
//   {flag:'a'}        //Using this flag will append to the original content
// );

//Asynchrounous approach
// const { readFile, writeFile } = require("fs");
// readFile("./content/sub-content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/sub-content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile("./content/sub-content/async-result.txt",`Asnc result is: ${first + second}`,(err,result) => {
//         if(err) {
//             return;
//         }
//         return;
//     })
//   });
// });
