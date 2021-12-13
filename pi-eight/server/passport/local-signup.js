
const usersData = require('../data/users')
const PassportLocalStragegy = require('passport-local').Strategy

module.exports = new PassportLocalStragegy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const user = {
        email: email.trim(),
        password: password.trim()
    }

    const existingUser = usersData.findByEmail(email)
    if (existingUser) {
        return done('E-mail already exists')
    }
    usersData.save(user)

    return done(null)
}) 
