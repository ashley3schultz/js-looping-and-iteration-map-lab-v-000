// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function (name){return name.toLowerCase()})
}

function nameToAttributes(arr) {
  return arr.map(function (user) { return { firstName: user.split(' ')[0] }); })
}

function attributesToPhrase(obj) {
  return obj.map(function (user) {return Object.assign({}, user, { firstName: 'test' }); })
}
