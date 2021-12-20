
import express from 'express'

import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport' ; 
import ("./passport/local-signup")
const hotelRoutes = `./routes/hotels`
const authRoutes = './routes/auth'
const app  = express()

 
const localSignupStrategy = '../local-signup'
const localLoginStrategy = '../local-login'


const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cors())

app.use(localSignupStrategy)
app.use(localLoginStrategy)

//routes
app.use(authRoutes)
app.use(hotelRoutes)


app.listen(port, () => {
    console.log(`Server running on ${port}...`)
})
