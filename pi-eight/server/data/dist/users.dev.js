

var usersById = {};
var usersByEmail = {};
module.exports = {
  save: function save(user) {
    var id = Object.keys(usersById).length + 1;
    user.id = id;
    usersById[id] = user;
    usersByEmail[user.email] = user;
  },
  findByEmail: function findByEmail(email) {
    return usersByEmail[email];
  },
  findById: function findById(id) {
    return usersById[id];
  }
};