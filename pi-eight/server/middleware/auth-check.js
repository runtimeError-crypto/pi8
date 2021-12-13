const jwt = require('jsonwebtoken')
const userData = require('../data/users')

module.exports = (req, res, next) => {
    if (!req.headers.autorization) {
        return res.status(401).end()
    }

    const token = req.headers.authorizaion.split('')[1]

    return jwt.verify(token, 's0me random string', (err, decoded) => {

        if (err) { return res.status(401).end() }

        const userId = decoded.sub

        const user = userData.findById(userId)
        if (!user) {
            return res.status(401).end()
        }
        req.user = user
        return next()
    })


}
