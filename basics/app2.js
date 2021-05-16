//Modules - only sharing the minimum between files


var names_shared = require("./names.js").names;
const sayHi = require("./say_hi_module.js").sayHi;


for (var i = 0; i < names_shared.length; i++) {
  sayHi(names_shared[i]);
}

require("./2-mindgreanade.js");
// The require is not assigned to anything in this case but still it seems to work
// infact it calls the function that is called in the original file, this is because in
// the original 'module' 2-mindgreanade I've invoked the function. So whenever a module is required
// all the function calls are made as if it was executing normally, imagine python