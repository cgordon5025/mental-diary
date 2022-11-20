const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')


const grandparentsSchema = new Schema(
    {
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


const Grandparents = model('Grandparents', grandparentsSchema)

module.exports = Grandparents