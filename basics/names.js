var names = ["jason", "jenny", "ross"];

var secret = "this is a secret variable";

module.exports = { names };

//This syntax is also possible because module is an object, hence we are simply 
// add our custom object to it as one of the properties
//But commonPerson won't be accessible in this file anymore 
module.exports.commonPerson = {
  firstName: "Jay",
  lastName: "Veer",
  age: 43,
};
console.log(module);