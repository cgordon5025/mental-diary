const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')


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


const Siblings = model('Siblings', siblingSchema)

module.exports = Siblings