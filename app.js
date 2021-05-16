const _ = require('lodash')
const array = [1,[2,[4],3,[4,5]]]
const newArray = _.flattenDeep(array)
console.log(newArray);