const jwt = require('jsonwebtoken')
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

    let savedUser = usersData.findByEmail(email)

    if (!savedUser) {
        const error = new Error('Incorrect email or password')
        error.name = 'IncorrectCredentialsError'

        return done(error)

    }

    const isMatch = savedUser.password === user.password

    if (!isMatch) {
        const error = new Error('Incorrect email or password')
        error.name = 'IncorrectCredentialsError'

        return done(error)

    }
    const payload = {
        sub: savedUser.id

    }

    const token = jwt.sign(payload, 'some random string')
    const data = {
        name: savedUser.name
    }
    return done(null, token, data)

}

)
