const { Schema, model } = require('mongoose');


const grandparentsSchema = new Schema(
    {
        grandparentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
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



module.exports = grandparentsSchema