const express = require('express')
const cors = require('cors') 
const bodyParser = require('body-parser')
const passport = require('passport')    
const localSignupStrategy = require('./passport/local-signup')
const localLoginStrategy = require(`./passport/local-login`)
const authRoutes = require(`./routes/auth`)
const hotelRoutes = require(`./routes/hotels`)
 
const app = express()

const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cors())

app.use('local-signup', localSignupStrategy)
app.use('local-login', localLoginStrategy)

//routes
app.use('/auth', authRoutes)
app.use('/hotels', routess)

app.listen(port, () => {
    console.log(`Server running on ${port}...`)
})
