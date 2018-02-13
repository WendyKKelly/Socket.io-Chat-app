[{
  id: '?lkkj',
  name: 'Wendy',
  room: 's'
}]

class Users {
constructor () {
 this.users = [];

}
addUser (id, name, room) {
var user = {id, name, room};
  this.users.push(user);
  return user;
}
removeUser (id) {
var user = this.getUser(id);

if(user) {
  this.users = this.users.filter((user) => user.id !== id);
}

return user;
}
getUser (id) {
return this.users.filter((user) => user.id === id)[0]

}
getUserList (room) {
var users = this.users.filter((user) => user.room === room);
var nameArray = users.map((user) => user.name);
return nameArray;

}
}
module.exports = {Users};
// class Person {
// constructor (name, age) {
//
//   this.name = name;
//   this.age = age;
// }
// getUserDescription () {
//   return `${this.name} is ${this.age} year(s) old`;
// }
// }
//   var me = new Person('Wendy', 50);
//   console.log('this.name', me.name);
//   console.log('this.age', me.age);
//
//   var description = me.getUserDescription();
//   console.log(description);
