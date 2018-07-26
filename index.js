// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function (name){return name.toLowerCase()})
}

function nameToAttributes(arr) {
  return arr.map(function (user){ return Object.assign({}, user, {firstName: user.name.split(" ")[0], lastName: user.name.split(" ")[1] }) })
}

function attributesToPhrase(obj) {

}
