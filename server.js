//deps
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const CharacterRouter = require('./controllers/characters')

const app = express()

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/lotr', CharacterRouter)

app.get('/', (req, res) => {
    res.send('The One Ring')
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening on channel ${PORT}`))