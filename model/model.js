const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    source: {
        required: true,
        type: String
    },
    year: {
        required: true,
        type: Number
    },
    down_payment_level: {
        required: true,
        type: Number
    },
    first_mortgage: {
        required: true,
        type: Boolean
    },
    long_amortization: {
        required: true,
        type: Boolean
    },
    rate_type: {
        required: true,
        type: String
    },
    rate: {
        required: true,
        type: Number
    },
    posted: {
        required: true,
        type: Boolean
    },
    refinance_rate: {
        required: false,
        type: Number
    },
    type: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)