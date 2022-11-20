const { Schema, model } = require('mongoose');


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



module.exports = parentsSchema