const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')

const app = express()

dotenv.config()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors({origin: '*'}))

app.use(morgan('dev'))



mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URI)
    .then(console.log("Connection to the DB successful"))
    .catch(err => console.log(err))



const blogRoute = require('./api/routes/blog')
app.use('/blogs', blogRoute)


app.use( (req, res) => {
    res.status(400).json({ message: "The page you're looking for does not exist!" })
} )


module.exports = app;