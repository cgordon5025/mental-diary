const { Schema, model } = require('mongoose');


const siblingSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        relation: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: false
        }
    }
)



module.exports = siblingSchema