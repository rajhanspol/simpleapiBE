const express = require('express')
const Model = require('../model/model')
const router = express.Router()

router.post('/post', async (req, res) => {
    const data = new Model({
        id: req.body.id,
        source: req.body.source,
        year: req.body.year,
        down_payment_level: req.body.down_payment_level,
        first_mortgage: req.body.first_mortgage,
        long_amortization: req.body.long_amortization,
        rate_type: req.body.rate_type,
        rate: req.body.rate,
        posted: req.body.posted,
        refinance_rate: req.body.refinance_rate,
        type: req.body.type
    })

    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    } catch(error) {
        res.status(400).json({message: error.message})
    }
})

// GET ALL
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find()
        res.json(data)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

// GET ONE
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

module.exports = router
