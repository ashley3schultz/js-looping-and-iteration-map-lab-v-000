// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function (name){return name.toLowerCase()})
}

function nameToAttributes(arr) {
  newarr = map(arr, function (user) {return Object.assign({}, user, { firstName: user.split(' ')[0] }); })
return newarr
}

function attributesToPhrase(obj) {

}
