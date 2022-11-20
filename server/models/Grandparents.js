const { Schema, model } = require('mongoose');


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



module.exports = grandparentsSchema