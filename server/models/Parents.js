const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')


const parentsSchema = new Schema(
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


const Parents = model('Parents', parentsSchema)

module.exports = Parents