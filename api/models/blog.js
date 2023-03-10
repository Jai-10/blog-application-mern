const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        title: {
            type: String,
            min: 3,
            required: true
        },
        username: {
            type: String,
            max: 20,
            required: true
        },
        body: {
            type: String,
            min: 10,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Blog', blogSchema);