

const Settlement = new mongoose.Schema({
    groupId: {
        type: String,
        required: true
    },
    settleTo: {
        type: String,
        required: true
    },
    settleFrom: {
        type: String,
        required: true
    },
    settleDate: {
        type: String,
        required: true
    },
    settleAmount: {
        type: Number,
        required: true
    }
})

module.exports.Settlement = mongoose.model('settlement', Settlement)
