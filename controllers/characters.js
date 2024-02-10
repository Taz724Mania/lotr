const express = require('express')
const Characters = require('../models/characters.js')

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        res.json(await Characters.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/', async (req, res) => {
    try{
        res.json(await Characters.create(req.body))
    }   catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        res.json(await Characters.findByIdAndDelete(req.params.id))
    }   catch (err) {
        res.status(400).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try{
        res.json(await Characters.findById(req.params.id))
    }   catch (err) {
        res.status(400).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        res.json(await Characters.findByIdAndUpdate(req.params.id, req.body))
    }   catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router