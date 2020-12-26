const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')

const characterRouter = require('./routes/character.routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', characterRouter)

const PORT = config.get('port') || 5001
const MONGO_URI = config.get('mongoUri')

async function start () {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}...`)
        }) 
    } catch (err) {
        console.log('ERR -> ', error)
        process.exit(1)
    }
}

start()